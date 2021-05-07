import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Administrador } from 'src/app/models/administrador';
import { Pagina } from 'src/app/models/pagina';
import { PaginaService } from 'src/app/services/paginaService';
import { SessionService } from 'src/app/services/sessionService';
import { PaginasPage } from '../paginas.page';

@Component({
  selector: 'app-pagina-form',
  templateUrl: './pagina-form.component.html',
  styleUrls: ['./pagina-form.component.scss'],
})
export class PaginaFormComponent implements OnInit {

  constructor(private http:HttpClient) { }
  ngOnInit() {
    if(PaginaFormComponent.page){
      this.pagina = PaginaFormComponent.page
    }
  }

  static page:Pagina
  
  emptyPage:Pagina = { id: 0, nome: null, conteudo: null, areaRestrita: null, login: null, home: null, ordem: null }
  pagina:Pagina = this.emptyPage

  salvar(){
    let admLogado:Administrador = SessionService.get("admLogado")
    new PaginaService(this.http).salvar(admLogado.token, this.pagina)
    this.pagina = this.emptyPage
    alert('Salvo no banco de dados')
    PaginasPage.getInstance().form = false;
    PaginasPage.getInstance().carregaPaginas();
  }

  cancelar(){
    this.pagina = this.emptyPage
    PaginasPage.getInstance().form = false;
  }

}
