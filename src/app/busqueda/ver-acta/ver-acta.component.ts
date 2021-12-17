import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudActaService } from 'src/app/servicio/crud-acta.service';

@Component({
  selector: 'app-ver-acta',
  templateUrl: './ver-acta.component.html',
  styleUrls: ['./ver-acta.component.css']
})
export class VerActaComponent implements OnInit {


  id:any;

  Actas:any;

  constructor(private crudService:CrudActaService,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.id=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    this.crudService.ObtenerActa(this.id).subscribe(respuesta=>{
      console.log(respuesta);
      this.Actas=respuesta;
    })
  }

}
