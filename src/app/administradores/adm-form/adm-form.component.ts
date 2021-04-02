import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Administrador } from 'src/app/models/administrador';
import { AdministradorService } from 'src/app/services/administradorService';
import { AdministradoresPage } from '../administradores.page';

@Component({
  selector: 'app-adm-form',
  templateUrl: './adm-form.component.html',
  styleUrls: ['./adm-form.component.scss'],
})
export class AdmFormComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  
  emptyAdm:Administrador = { id: 0, nome: null, telefone: null, email: null, senha: null }
  administrador:Administrador = this.emptyAdm

  salvar(){
    new AdministradorService(this.http).salvar(this.administrador)
    this.administrador = this.emptyAdm
    alert('Salvo no banco de dados')
    AdministradoresPage.getInstance().form = false;
    AdministradoresPage.getInstance().carregaAdministradores();
  }

  cancelar(){
    this.administrador = this.emptyAdm
    AdministradoresPage.getInstance().form = false;
  }

}
