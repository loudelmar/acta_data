import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';

import { Role } from '../_models';

//perfiles de empelados
const usersKey = 'acta_data-admin';
const usersJSON = localStorage.getItem(usersKey);
let empleados: any[] = usersJSON ? JSON.parse(usersJSON) : [{
    id: 1,
    dni: '40.775.265',
    nombre: 'Lourdes del Mar',
    apellido: 'Lede',
    fechaNacimiento: '17/02/1998',
    sectorTrabajo: 'Archivo',
    mail: 'lourdeslede17@gmail.com',
    contraseña: 'lourdes'
}];


const users = [
    { id: 1, dni: 'admin', password: 'admin', role: Role.Admin },
    { id: 2, dni: 'user', password: 'user', role: Role.User }
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return handleRoute();        

        function handleRoute() {
            switch (true) {
                //pagina empleados
                case url.endsWith('/admin')&& method === 'GET':
                    return getEmpleados();
                case url.match(/\/admin\/\d+$/) && method === 'GET':
                    return getEmpleadosById();
                case url.endsWith('/admin') && method === 'POST':
                    return createEmpleado();
                case url.match(/\/admin\/\d+$/) && method === 'PUT':
                    return updateEmpleado();
                case url.match(/\/admin\/\d+$/) && method === 'DELETE':
                    return deleteEmpleado();
                //
                //autenticacion de usuario/admin
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }

        }

        // route functions

        //pagina empleados

        function getEmpleados() {
            return ok(empleados.map(x => basicDetails(x)));
        }

        function getEmpleadosById() {
            const empleado = empleados.find(x => x.id === idFromUrl());
            return ok(basicDetails(empleado));
        }

        function createEmpleado() {
            const empleado = body;

            if (empleados.find(x => x.mail === empleado.mail)) {
                return error(`El empleado con el mail ${empleado.mail} ya existe`);
            }

            // assign user id and a few other properties then save
            empleado.id = newEmpleadoId();
            delete empleado.confirmPassword;
            empleados.push(empleados);
            localStorage.setItem(usersKey, JSON.stringify(empleados));

            return ok(empleado);
        }

        function updateEmpleado() {
            let params = body;
            let empleado = empleados.find(x => x.id === idFromUrl());

            if (params.mail !== empleado.mail && empleados.find(x => x.mail === params.mail)) {
                return error(`El empleado con el mail ${params.email} ya existe`);
            }

            // only update password if entered
            if (!params.contraseña) {
                delete params.contraseña;
            }

            // update and save user
            Object.assign(empleado, params);
            localStorage.setItem(usersKey, JSON.stringify(empleados));

            return ok(empleados);
        }

        function deleteEmpleado() {
            empleados = empleados.filter(x => x.id !== idFromUrl());
            localStorage.setItem(usersKey, JSON.stringify(empleados));
            return ok(empleados);
        }

        //

        //autenticacion de usuario/admin

        function authenticate() {
            const { dni, password } = body;
            const user = users.find(x => x.dni === dni && x.password === password);
            if (!user) return error('DNI o Contraseña incorrectos');
            return ok({
                id: user.id,
                dni: user.dni,
                role: user.role,
                token: `fake-jwt-token.${user.id}`
            });
        }

        function getUsers() {
            if (!isAdmin()) return unauthorized();
            return ok(users);
            if (!isUser()) return unauthorized();
        }

        function getUserById() {
            if (!isLoggedIn()) return unauthorized();

            // only admins can access other user records
            if (!isAdmin() && currentUser().id !== idFromUrl()) return unauthorized();
            if (!isUser() && currentUser().id !== idFromUrl()) return unauthorized();

            const user = users.find(x => x.id === idFromUrl());
            return ok(user);
        }

        // helper functions

        function ok(body) {
            return of(new HttpResponse({ status: 200, body }))
                .pipe(delay(500)); // delay observable to simulate server api call
        }

        function error(message) {
            return throwError({ status: 400, error: { message } })
                .pipe(materialize(), delay(500), dematerialize());
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }

        //pagina empleados

        function basicDetails(empleado: any) {
            const { id, dni, nombre, apellido, fechaNacimiento, sectorTrabajo, mail, contraseña } = empleado;
            return { id, dni, nombre, apellido, fechaNacimiento, sectorTrabajo, mail, contraseña };
        }

        function newEmpleadoId() {
            return empleados.length ? Math.max(...empleados.map(x => x.id)) + 1 : 1;
        }

        //autenticacion de usuario/admin

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'unauthorized' } })
                .pipe(materialize(), delay(500), dematerialize()); // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
        }


        function isLoggedIn() {
            const authHeader = headers.get('Authorization') || '';
            return authHeader.startsWith('Bearer fake-jwt-token');
        }

        function isAdmin() {
            return isLoggedIn() && currentUser().role === Role.Admin;
        }

        function isUser() {
            return isLoggedIn() && currentUser().role === Role.User;
        }

        function currentUser() {
            if (!isLoggedIn()) return;
            const id = parseInt(headers.get('Authorization').split('.')[1]);
            return users.find(x => x.id === id);
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};