import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})


export class BusquedaComponent implements OnInit {

  searchValue: string;
  items = [];
  condition: boolean = null;
  prevText: string = '';
  actas = [{
    "nombre": "Lede, Lourdes del Mar",
    "DNI": "40.775.265",
    "FechaNacimiento": "17/02/1998",
    "LugarNacimiento": "La Rioja, Capital",
    "ActaNacimiento": "VER"
  },
  {
    "nombre": "Lede, Milva Ernestina",
    "DNI": "44.123.456",
    "FechaNacimiento": "24/04/2004",
    "LugarNacimiento": "La Rioja, Capital",
    "ActaNacimiento": "VER"
  },
  {
    "nombre": "Lede, Guadalupe Esmeralda",
    "DNI": "01.234.567",
    "FechaNacimiento": "13/11/2005",
    "LugarNacimiento": "La Rioja, Capital",
    "ActaNacimiento": "VER"
  },
  {
    "nombre": "Lede, Ángel Gustavo",
    "DNI": "23.670.990",
    "FechaNacimiento": "07/01/1974",
    "LugarNacimiento": "Buenos Aires, Capital Federal",
    "ActaNacimiento": "VER"
  },
  {
    "nombre": "Mansilla Kukulis, Susana Estela",
    "DNI": "23.963.589",
    "FechaNacimiento": "24/06/1974",
    "LugarNacimiento": "La Rioja, Capital",
    "ActaNacimiento": "VER"
  },
  {
    "nombre": "Lede, Lourdes del Mar",
    "DNI": "40.775.265",
    "FechaNacimiento": "17/02/1998",
    "LugarNacimiento": "La Rioja, Capital",
    "ActaNacimiento": "VER"
  },
  {
    "nombre": "Lede, Milva Ernestina",
    "DNI": "44.123.456",
    "FechaNacimiento": "24/04/2004",
    "LugarNacimiento": "La Rioja, Capital",
    "ActaNacimiento": "VER"
  },
  {
    "nombre": "Lede, Guadalupe Esmeralda",
    "DNI": "01.234.567",
    "FechaNacimiento": "13/11/2005",
    "LugarNacimiento": "La Rioja, Capital",
    "ActaNacimiento": "VER"
  }
  
];
  res_list = [];
  res_cnt: number = 0;
    
  onSubmit($event){
    if($event.keyCode === 13){
      this.condition = true;
      this.prevText = this.searchValue;
      this.res_cnt = 0;
      this.res_list = [];
      setTimeout(() => {
        this.condition = false;
        for(let i=0; i<this.actas.length; i++){
          if(this.actas[i] === this.prevText.toLowerCase()
             || this.actas[i].startsWith(this.prevText)){
            this.res_cnt += 1;
            this.res_list.push(this.actas[i]);
          }
        }
      }, 3000);
      this.searchValue = null;
    }
  }

    //paginación
    pageOfItems: Array<any>;

    onChangePage(pageOfItems: Array<any>) {
      // update current page of items
      this.pageOfItems = pageOfItems;
  }

  constructor() { }

  ngOnInit(): void {
    console.log(123);

    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1)}));
  }
}
