import { Component, OnInit } from '@angular/core';
import { GeoService } from '../_services/geo.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  public nombrePais: string;

  public paises;

  constructor(private service: GeoService, private router: Router) { }

  ngOnInit(): void {
    this.actualizarPaises();
  }

  crear() {
    if (!this.nombrePais) {
      return;
    }
    this.service.createPais(this.nombrePais).subscribe(
      () => {
        this.actualizarPaises();
        this.nombrePais = undefined;
      },
      (error) => alert(error)
    );
  }

  eliminar(idPais: string) {
    this.service.deletePais(idPais).subscribe(
      () => this.actualizarPaises(),
      (error) => alert(error)
    );
  }

  actualizarPaises(){
    this.service.getPaises().subscribe(paises => {
      this.paises = paises;
    });
  }

}
