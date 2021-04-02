import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Administrador } from '../models/administrador';
import { AdministradorService } from '../services/administradorService';

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

  ngOnInit() {
    this.carregaAdministradores()
  }

  public administradores:Administrador[]

  abrirForm(){
    if(!this.form) this.form = true
    else this.form = false
  }

  async carregaAdministradores(){
    this.administradores = await new AdministradorService(this.http).todos()
  }
}
