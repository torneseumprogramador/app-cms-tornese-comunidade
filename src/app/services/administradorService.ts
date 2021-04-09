import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Administrador } from '../models/administrador'

export class AdministradorService{
  constructor(private http: HttpClient){ }

  public async todos(page:number = 1){
    return await this.http.get<Administrador[]>(`${environment.uri}/administradores.json?page=${page}`).toPromise()
  }

  public async salvar(administrador:Administrador){
    return await this.http.post<Administrador[]>(`${environment.uri}/administradores.json`, administrador).toPromise()
  }
}
