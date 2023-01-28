import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { FormularioService } from '../services/formulario.service';




@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})

export class FormularioComponent {

  formulario: FormGroup = this.formbuilder.group({
    nombre: [,[Validators.required, Validators.minLength(3)]],
    apellido: [,[Validators.required, Validators.minLength(3)]],
    telefono: [,[Validators.required, Validators.pattern('[- +()0-9]+')]],
    email: [,[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    fechaNacimiento: [,[Validators.required]],
    genero: [,[Validators.required]]
  })
  
  constructor( private formbuilder: FormBuilder, private formularioService:FormularioService){}

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

    this.formularioService.agregarUsuario(this.formulario.value);

    this.formulario.reset();


  }

}



