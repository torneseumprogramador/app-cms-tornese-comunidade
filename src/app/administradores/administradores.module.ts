import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministradoresPageRoutingModule } from './administradores-routing.module';
import { MenuComponent } from '../shared/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../shared/header/header.component';

import { AdministradoresPage } from './administradores.page';
import { AdmFormComponent } from './adm-form/adm-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AdministradoresPageRoutingModule
  ],
  declarations: [
    AdmFormComponent,
    MenuComponent,
    HeaderComponent,
    AdministradoresPage
  ]
})
export class AdministradoresPageModule {}
