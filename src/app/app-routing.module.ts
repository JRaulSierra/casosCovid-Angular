import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Creacion de las rutas principales
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/navi/navi.module').then((m) => m.NaviModule),
  },
  {path:'**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
