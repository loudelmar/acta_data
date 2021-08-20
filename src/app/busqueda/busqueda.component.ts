import { Component, OnInit } from '@angular/core';
import { Observable, of, from} from 'rxjs';
import { Actas } from './actas-model';
import { ActasService } from './actas-service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})


export class BusquedaComponent implements OnInit {

  //prueba buscador
  actas: Actas[] = [];
  actas$: Observable<Actas[]>;

  constructor(private actasService:ActasService){}

  ngOnInit(){

    const array3 = [1, 2, 3, 4, 5, 6, 7]
    const obsfrom1 = from(array3);
    obsfrom1.subscribe(val => console.log(val),
      error => console.log("error"),
      () => console.log("complete"))


    //this.actas$ = this.actasService.getActas$();
    //this.actas$.subscribe(actas => this.actas = actas);
      };
  }

    //

  /*

  searchValue: string = null;

  items = [];
  condition: boolean = null;
  prevText: string = '';
  nombre: string = '';
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
          if(this.nombre === this.searchValue
             || this.nombre.startsWith(this.prevText)){
            this.res_list.length
            this.res_list.push(this.actas);
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
*/