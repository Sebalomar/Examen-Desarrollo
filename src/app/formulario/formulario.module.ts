import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormularioComponent } from './formulario/formulario.component';
import { GrillaComponent } from './grilla/grilla.component';





@NgModule({
  declarations: [FormularioComponent, GrillaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    FormularioComponent,
    GrillaComponent
  ]
})
export class FormularioModule { }
