import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Pagina } from '../models/pagina';
import { PaginaService } from '../services/paginaService';

@Component({
  selector: 'app-paginas',
  templateUrl: 'paginas.page.html',
  styleUrls: ['paginas.page.scss'],
})
export class PaginasPage {

  constructor(
    private http:HttpClient
  ) {
    this.carregaPaginas()
  }

  public paginas:Pagina[]
  form:boolean = false
  maisItensPaginado:boolean = false
  page:number = 1

  async maisItens(){
    this.page += 1;
    let pgs = await new PaginaService(this.http).todos(this.page)
    this.paginas = this.paginas.concat(pgs)
    if(pgs.length < 2){
      this.maisItensPaginado = false
    }
  }

  async carregaPaginas(){
    this.page = 1
    this.paginas = await new PaginaService(this.http).todos()
    if(this.paginas.length == 2){
      this.maisItensPaginado = true
    }
  }

}
