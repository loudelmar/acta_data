import { Injectable } from '@angular/core';
import { Actas } from './actas-model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ActasService {

    private actas: Actas[];
    private actas$: Subject <Actas[]> = new Subject <Actas[]>();

    constructor(){
        this.actas = [
            {
                nombre: 'Lourdes del Mar',
                apellido: 'Lede',
                dni: '40775265',
                fechaNacimiento: '17/02/1998',
                lugarNacimiento: 'La Rioja'
            },
            {
                nombre: 'Angel Gustavo',
                apellido: 'Lede',
                dni: '23670990',
                fechaNacimiento: '07/01/1974',
                lugarNacimiento: 'Buenos Aires'
            }
        ];
    }

    getActas$(): Observable<Actas[]>{
        return this.actas$.asObservable();
    }
}
