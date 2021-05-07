import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Administrador } from '../models/administrador'

export class AdministradorService{
  constructor(private http: HttpClient){ }

  public async todos(token:string, page:number = 1){
    return await this.http.get<Administrador[]>(`${environment.uri}/administradores.json?page=${page}`, { headers: new HttpHeaders({authorization: `Bearer ${token}`})}).toPromise()
  }

  public async salvar(token:string, administrador:Administrador){
    if(administrador.id > 0){
      return await this.http.put<Administrador>(`${environment.uri}/administradores/${administrador.id}.json`, administrador, { headers: new HttpHeaders({authorization: `Bearer ${token}`})}).toPromise()
    }
    return await this.http.post<Administrador>(`${environment.uri}/administradores.json`, administrador, { headers: new HttpHeaders({authorization: `Bearer ${token}`})}).toPromise()
  }

  public async login(administrador:Administrador){
    return await this.http.post<Administrador>(`${environment.uri}/login.json`, administrador).toPromise()
  }

  public async excluir(token:string, administrador:Administrador){
    await this.http.delete(`${environment.uri}/administradores/${administrador.id}.json`, { headers: new HttpHeaders({authorization: `Bearer ${token}`})}).toPromise()
  }
}
