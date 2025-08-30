import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnuncioFilterComponent } from './anuncio-filter/anuncio-filter.component';
import { AnuncioListComponent } from './anuncio-list/anuncio-list.component';
import { AnuncioComponent } from './anuncio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material';
import { MaterialModule } from 'material.module';
import { AnuncioRoutingModule } from './anuncio-routing.module';
import { ComponentsModule } from 'app/components/components.module';
import { AnuncioFormComponent } from './anuncio-form/anuncio-form.component';
import { AnuncioItemComponent } from './anuncio-item/anuncio-item.component';
import { FotoModule } from 'app/foto/foto.module';

@NgModule({
  declarations: [AnuncioFilterComponent, AnuncioListComponent, AnuncioComponent, AnuncioFormComponent, AnuncioItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    MaterialModule,    
    AnuncioRoutingModule,
    ComponentsModule,
    FotoModule
    
  ]
})
export class AnuncioModule { }
