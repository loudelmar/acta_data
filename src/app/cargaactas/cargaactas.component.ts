import { Component, OnInit } from '@angular/core';
import { ActasService } from '../_services/actas.service';
import { Router } from '@angular/router';
import { Acta } from './acta';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cargaactas',
  templateUrl: './cargaactas.component.html',
  styleUrls: ['./cargaactas.component.css']
})
export class CargaactasComponent implements OnInit {

  acta: FormGroup;
  ngOnInit() {
    this.acta = new FormGroup({
      dniInscripto: new FormControl('', [Validators.required, Validators.minLength(8)]),
      nombreInscripto: new FormControl('', Validators.required),
      apellidoInscripto: new FormControl('', Validators.required)
    });
  }
}
  /*public inscriptos;

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
*/