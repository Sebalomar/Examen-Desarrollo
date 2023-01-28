import { Injectable } from "@angular/core";

import { Usuario } from '../interfaces/formulario.interface';

@Injectable({
    providedIn: 'root'
})
export class FormularioService {


    private _usuarios: Usuario[] = [];

    get usuarios(): Usuario[]{
        return [...this._usuarios];
    }

    constructor(){
        console.log('servicio inicializado');
        if (localStorage.getItem('usuarios')){
            this._usuarios = JSON.parse(localStorage.getItem('usuarios'));
            console.log(this._usuarios.length);
        }
    }

    agregarUsuario( usuario: Usuario) {

        if (!localStorage.getItem('usuarios') || this._usuarios.length == 0){
            usuario.id = 1;
            this._usuarios.push( usuario );
            localStorage.setItem('usuarios', JSON.stringify( this._usuarios) )
        }else{
     

            let ultimo: number = this._usuarios.length -1;
            usuario.id = this._usuarios[ultimo].id + 1;
            
            this._usuarios.push( usuario );
    
            localStorage.setItem('usuarios', JSON.stringify( this._usuarios) )

        }

    

    }

    eliminarUsuario (idU: number) {

        this._usuarios = JSON.parse(localStorage.getItem('usuarios'));
    
        this._usuarios.forEach((value,index)=>{
            if(value.id==idU) this._usuarios.splice(index,1);
        });

        localStorage.setItem('usuarios', JSON.stringify( this._usuarios) )
    } 



}