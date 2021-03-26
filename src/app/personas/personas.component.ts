import { Component, OnInit } from '@angular/core';
import { ActasService } from '../_services/actas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(private service: ActasService) { }

  ngOnInit(): void {
    this.service.getObstetras().subscribe(dataObstetras => {
      console.log(dataObstetras);
    });
  }
}
