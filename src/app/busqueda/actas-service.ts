import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actas } from './actas'

@Injectable()
export class ActasService {
    constructor(private http: HttpClient) { }

    getCustomersLarge() {
        return this.http.get<any>('assets/customers-large.json')
            .toPromise()
            .then(res => <Actas[]>res.data)
            .then(data => { return data; });
    }
}
