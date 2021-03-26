import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Administrador } from '../models/administrador'

export class AdministradorService{
  constructor(private http: HttpClient){ }
  public async todos(){
    return await this.http.get<Administrador[]>(`${environment.uri}/administradores.json`).toPromise()
  }
}
