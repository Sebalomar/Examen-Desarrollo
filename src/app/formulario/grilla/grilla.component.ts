import { Component } from '@angular/core';

import { FormularioService } from '../services/formulario.service';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styles: [
  ]
})
export class GrillaComponent{
  
  get usuarios(){
    return this.formularioService.usuarios;
  }

  eliminar(id: number){
    this.formularioService.eliminarUsuario(id);
  }

  constructor( private formularioService: FormularioService) { }



}
