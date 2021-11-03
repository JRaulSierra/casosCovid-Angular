import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MundialComponent } from './pages/mundial/mundial.component';
import { CAComponent } from './pages/c-a/c-a.component';
import { FormComponent } from './pages/form/form.component';

// estas son rutas hijas

const routes: Routes=[
  {
    path:'',
    children:[
      {path:'', component: HomeComponent},
      {path:'mundial', component: MundialComponent},
      {path:'c-a', component: CAComponent},
      {path:'form',component: FormComponent},
      {path:'**', redirectTo: ''}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class NaviRoutingModule { }
