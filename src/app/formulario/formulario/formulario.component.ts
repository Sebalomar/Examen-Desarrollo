import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Usuario } from '../interfaces/formulario.interface';

import { FormularioService } from '../services/formulario.service';




@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})

export class FormularioComponent {

/*   formulario: FormGroup = new FormGroup({
    nombre: new FormControl('Sebastian'),
    apellido: new FormControl('Alomar'),
    telefono: new FormControl('1565541322'),
    email: new FormControl('sebastian.m.alomar@gmail.com'),
    fechaNacimiento: new FormControl('26/07/1995'),
    genero: new FormControl('Femenino')

  }) */


  formulario: FormGroup = this.formbuilder.group({
    nombre: [,[Validators.required, Validators.minLength(3)]],
    apellido: [,[Validators.required]],
    telefono: [,[Validators.required]],
    email: [,[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    fechaNacimiento: [,[Validators.required]],
    genero: [,[Validators.required]]
  })
  



  constructor( private formbuilder: FormBuilder){}

  validarCampo( campo: string ){

    return this.formulario.controls[campo].errors
            && this.formulario.controls[campo].touched;

  }

  agregar(){

    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      return;
    }

    console.log(this.formulario.value);
    this.formulario.reset();
  }

}



