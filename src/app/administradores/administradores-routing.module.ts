import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministradoresPage } from './administradores.page';

const routes: Routes = [
  {
    path: '',
    component: AdministradoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradoresPageRoutingModule {}
