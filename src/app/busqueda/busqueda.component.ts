import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
  providers: [MessageService]
})


export class BusquedaComponent implements OnInit {


  filterTerm: string;

  Actas = [{
      "nombre": "Lourdes del Mar Lede",
      "DNI": "40.775.265",
      "FechaNacimiento": "17/02/1998",
      "LugarNacimiento": "La Rioja, Capital",
      "ActaNacimiento": "VER"
    },
    {
      "nombre": "Milva Ernestina Lede",
      "DNI": "44.123.456",
      "FechaNacimiento": "24/04/2004",
      "LugarNacimiento": "La Rioja, Capital",
      "ActaNacimiento": "VER"
    },
    {
      "nombre": "Guadalupe Esmeralda Lede",
      "DNI": "01.234.567",
      "FechaNacimiento": "13/11/2005",
      "LugarNacimiento": "La Rioja, Capital",
      "ActaNacimiento": "VER"
    },
    {
      "nombre": "Ángel Gustavo Lede",
      "DNI": "23.670.990",
      "FechaNacimiento": "07/01/1974",
      "LugarNacimiento": "Buenos Aires, Capital Federal",
      "ActaNacimiento": "VER"
    },
    {
      "nombre": "Susana Estela Mansilla Kukulis",
      "DNI": "23.963.589",
      "FechaNacimiento": "24/06/1974",
      "LugarNacimiento": "La Rioja, Capital",
      "ActaNacimiento": "VER"
    }
  ]


  constructor() { }

  ngOnInit(): void {
    console.log(123);
  }

}