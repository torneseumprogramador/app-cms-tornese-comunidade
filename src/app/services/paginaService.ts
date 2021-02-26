import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Pagina } from '../models/pagina'

export class PaginaService{
  constructor(private http: HttpClient){ }
  public async todos(){
    return await this.http.get<Pagina[]>(`${environment.uri}/paginas.json`).toPromise()
  }
}
