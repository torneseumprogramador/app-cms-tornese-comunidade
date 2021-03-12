import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PaginasPage } from './paginas.page';

import { PaginasRoutingModule } from './paginas-routing.module';
import { MenuComponent } from '../shared/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    PaginasRoutingModule
  ],
  declarations: [
    MenuComponent,
    HeaderComponent,
    PaginasPage,
  ]
})
export class PaginasPageModule {}
