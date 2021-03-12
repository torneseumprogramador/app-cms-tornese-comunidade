import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  openCloseMenu(){
    let itensMenu = document.querySelectorAll(".menu-itens");
    itensMenu.forEach(itemMenu => {
      if(itemMenu.className.indexOf("openMenu") == -1){
        itemMenu.className += " openMenu";
      }
      else{
        itemMenu.className = itemMenu.className.replace(/openMenu/g, '')
      }
    });
  }
}
