import { Injectable } from "@angular/core";

import { Usuario } from '../interfaces/formulario.interface';

@Injectable({
    providedIn: 'root'
})
export class FormularioService {


    private _usuarios: Usuario[] = [
      /*   {
            nombre: 'Sebastian',
            apellido: 'Alomar',
            numeroTelefono: 1565541322,
            email: 'sebastian.m.alomar@gmail.com',
            fechaNacimiento: 123123,
            genero: 'masculino'

        },

        {
            nombre: 'Alex',
            apellido: 'Alomar',
            numeroTelefono: 1565541322,
            email: 'sebastian.m.alomar@gmail.com',
            fechaNacimiento: 123123,
            genero: 'masculino'

        } */
    ];

    get usuarios(): Usuario[]{
        return [...this._usuarios];
    }

    constructor(){
        console.log('servicio inicializado');
        if (localStorage.getItem('usuarios')){
            this._usuarios = JSON.parse(localStorage.getItem('usuarios'))
        }
        
        
    }

    agregarUsuario( usuario: Usuario) {
        
        console.log(this._usuarios);
        this._usuarios.push( usuario );
        
        localStorage.setItem('usuarios', JSON.stringify( this._usuarios) )
    }



}