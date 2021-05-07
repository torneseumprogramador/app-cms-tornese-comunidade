import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Pagina } from '../models/pagina'

export class PaginaService{
  constructor(private http: HttpClient){ }
  public async todos(token:string, page:number = 1){
    return await this.http.get<Pagina[]>(`${environment.uri}/paginas.json?page=${page}`, { headers: new HttpHeaders({authorization: `Bearer ${token}`})}).toPromise()
  }

  public async salvar(token:string, pagina:Pagina){
    if(pagina.id > 0){
      return await this.http.put<Pagina>(`${environment.uri}/paginas/${pagina.id}.json`, pagina, { headers: new HttpHeaders({authorization: `Bearer ${token}`})}).toPromise()
    }
    return await this.http.post<Pagina>(`${environment.uri}/paginas.json`, pagina).toPromise()
  }

  public async excluir(token:string, pagina:Pagina){
    await this.http.delete(`${environment.uri}/paginas/${pagina.id}.json`, { headers: new HttpHeaders({authorization: `Bearer ${token}`})}).toPromise()
  }
}
