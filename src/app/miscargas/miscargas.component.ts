import { Component, OnInit } from '@angular/core';
import { ActasService } from '../_services/actas.service';

@Component({
  selector: 'app-miscargas',
  templateUrl: './miscargas.component.html',
  styleUrls: ['./miscargas.component.css']
})
export class MiscargasComponent implements OnInit {

  public inscriptos;
  public nombre="demo";

  constructor(private service: ActasService) { }

  ngOnInit(): void {
    this.service.getActas().subscribe(dataInscriptos => {
      console.log(dataInscriptos);
      this.inscriptos=dataInscriptos;
    });
  }

}
