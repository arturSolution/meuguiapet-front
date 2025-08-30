import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { FotoModule } from 'app/foto/foto.module';
import { ComponentsModule } from 'app/components/components.module';
import { MaterialModule } from 'material.module';
import { MatBottomSheetModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from '../usuario.component';
import { UsuarioFilterComponent } from '../usuario-filter/usuario-filter.component';
import { UsuarioListComponent } from '../usuario-list/usuario-list.component';
import { UsuarioFormComponent } from '../usuario-form/usuario-form.component';

@NgModule({
  declarations: [UsuarioComponent, 
    UsuarioFilterComponent, 
    UsuarioListComponent, 
    UsuarioFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    MaterialModule,        
    UsuarioRoutingModule,
    ComponentsModule,
    FotoModule,
    
  ]  
})
export class UsuarioModule { }
