import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Administrador } from '../models/administrador';
import { AdministradorService } from '../services/administradorService';
import { AdmFormComponent } from './adm-form/adm-form.component';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.page.html',
  styleUrls: ['./administradores.page.scss'],
})
export class AdministradoresPage implements OnInit {

  constructor(private http:HttpClient) { 
    AdministradoresPage.setInstance(this);
  }

  private static _instance:AdministradoresPage

  static setInstance(admPage:AdministradoresPage){
    AdministradoresPage._instance = admPage;
  }

  static getInstance():AdministradoresPage{
    return AdministradoresPage._instance;
  }

  form:boolean = false
  maisItensPaginado:boolean = false
  page:number = 1

  ngOnInit() {
    this.carregaAdministradores()
  }

  async maisItens(){
    this.page += 1;
    let adms = await new AdministradorService(this.http).todos(this.page)
    this.administradores = this.administradores.concat(adms)
    if(adms.length < 2){
      this.maisItensPaginado = false
    }
  }

  public administradores:Administrador[]

  abrirForm(){
    if(!this.form) this.form = true
    else this.form = false
  }

  async carregaAdministradores(){
    this.page = 1
    this.administradores = await new AdministradorService(this.http).todos()
    if(this.administradores.length == 2){
      this.maisItensPaginado = true
    }
  }

  async excluir(administrador:Administrador){
    if(confirm("Confirma a exclusão?")){
      await new AdministradorService(this.http).excluir(administrador)
      this.carregaAdministradores();
    }
  }

  alterar(administrador:Administrador){
    AdmFormComponent.adm = administrador
    this.abrirForm()
  }
}
