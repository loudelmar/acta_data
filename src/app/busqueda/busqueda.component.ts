import { Component, OnInit } from '@angular/core';
import { CrudActaService } from '../servicio/crud-acta.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})


export class BusquedaComponent implements OnInit {

  busqueda;

  Actas:any;

  constructor(private crudService:CrudActaService){}

  ngOnInit(): void{
    this.crudService.ObtenerActas().subscribe(respuesta=>{
      console.log(respuesta);
      this.Actas=respuesta;
    })
  }
}