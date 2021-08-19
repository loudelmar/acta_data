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
      apellidoInscripto: new FormControl('', Validators.required),
      sexoInscripto: new FormControl('', Validators.required),
      fechaNacimientoInscripto: new FormControl ('', Validators.required),
      fechaInscripcionInscripto: new FormControl(''),
      provinciaInscripto: new FormControl('', Validators.required),
      departamentoInscripto: new FormControl ('', Validators.required),
      localidadInscripto: new FormControl ('', Validators.required),
      barrioInscripto: new FormControl (''),
      calleInscripto: new FormControl (''),
      numeroCalleInscripto: new FormControl (''),
      nombreObstetra: new FormControl ('', Validators.required),
      apellidoObstetra: new FormControl('', Validators.required),
      nombreClinica: new FormControl(''),
      tipoClinica: new FormControl(''),
      dniMadre: new FormControl(''),
      nombreMadre: new FormControl(''),
      apellidoMadre: new FormControl(''),
      sexoMadre: new FormControl (''),
      fechaNacimientoMadre: new FormControl(''),
      provinciaMadre: new FormControl(''),
      departamentoMadre: new FormControl(''),
      localidadMadre: new FormControl(''),
      barrioMadre: new FormControl(''),
      calleMadre: new FormControl(''),
      numeroCalleMadre: new FormControl(''),
      dniPadre: new FormControl(''),
      nombrePadre: new FormControl(''),
      apellidoPadre: new FormControl(''),
      sexoPadre: new FormControl(''),
      fechaNacimientoPadre: new FormControl(''),
      provinciaPadre: new FormControl(''),
      departamentoPadre: new FormControl(''),
      localidadPadre: new FormControl(''),
      barrioPadre: new FormControl(''),
      callePadre: new FormControl(''),
      numeroCallePadre: new FormControl(''),
      fotoActa: new FormControl ('', Validators.required)
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