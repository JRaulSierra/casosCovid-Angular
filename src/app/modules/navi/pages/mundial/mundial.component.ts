import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mundial',
  templateUrl: './mundial.component.html',
  styleUrls: ['./mundial.component.css'],
})
export class MundialComponent implements OnInit {
  totalAngularPackage: any;
  texto: string = 'Estadisticas a nivel mundial sobre los casos de COVID-19';
  datos: any;
  confirmados: any;
  fallecidos: any;
  recuperados: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>(
        'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/brief'
      )
      .subscribe((data) => {
        this.confirmados = data.confirmed;
        this.fallecidos=data.deaths;
        this.recuperados=data.recovered;
      });
  }

  btn() {
    console.log(  'hola');
  }
}
