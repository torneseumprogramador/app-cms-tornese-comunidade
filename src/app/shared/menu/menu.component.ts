import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { SessionService } from 'src/app/services/sessionService';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(
    private menu: MenuController,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  home(){
    this.router.navigateByUrl("/home")
  }

  paginas(){
    this.router.navigateByUrl("/paginas")
  }

  administradores(){
    this.router.navigateByUrl("/administradores")
  }

  sair(){
    SessionService.remove("admLogado")
    this.router.navigateByUrl("/login")
  }
}
