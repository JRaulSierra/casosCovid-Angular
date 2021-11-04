import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  texto: string = "Información actualizada Sobre los casos de COVID-19";
  
  name() {
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
