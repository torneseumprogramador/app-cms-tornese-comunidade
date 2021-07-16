import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Administrador } from '../models/administrador';
import { AdministradorService } from '../services/administradorService';
import { SessionService } from '../services/sessionService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
  }

  erro:string = ""
  administrador:Administrador = {
    id: 0,
    nome: "",
    telefone: "",
    email: "",
    token: "",
    senha: "",
    imagem: ""
  }

  async logar(){
    let admService = new AdministradorService(this.http)
    try{
      let admLogado:Administrador = await admService.login(this.administrador)
      SessionService.set("admLogado", admLogado);
      this.router.navigateByUrl("/home")
    }
    catch(e){
      this.erro = "Login ou senha inválidos! - " + e.message
    }
  }

}
