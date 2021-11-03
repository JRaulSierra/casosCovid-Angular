import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MundialComponent } from './pages/mundial/mundial.component';
import { CAComponent } from './pages/c-a/c-a.component';
import { NaviRoutingModule } from './navi-routing.module';
import { FormComponent } from './pages/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
    MundialComponent,
    CAComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    NaviRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class NaviModule { }
