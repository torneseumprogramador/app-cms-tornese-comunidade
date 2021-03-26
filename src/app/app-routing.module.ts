import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'paginas',
    loadChildren: () => import('./paginas/paginas.module').then( m => m.PaginasPageModule)
  },
  {
    path: 'administradores',
    loadChildren: () => import('./administradores/administradores.module').then( m => m.AdministradoresPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'administradores',
    loadChildren: () => import('./administradores/administradores.module').then( m => m.AdministradoresPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
