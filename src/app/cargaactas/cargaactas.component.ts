import { Component, OnInit } from '@angular/core';
import { ActasService } from '../_services/actas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargaactas',
  templateUrl: './cargaactas.component.html',
  styleUrls: ['./cargaactas.component.css']
})
export class CargaactasComponent implements OnInit {

  public inscriptos;

  constructor(private service: ActasService, private router: Router) { }

  ngOnInit(): void {
    this.service.getActas().subscribe(dataInscriptos => {
      console.log(dataInscriptos);
      this.inscriptos=dataInscriptos;
    });
  }

  editar(idInscripto:string){
    this.router.navigate(['/obstetras'])
  }

}
