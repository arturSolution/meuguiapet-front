import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';


import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AnuncioModule } from './anuncio/anuncio.module';
import { MatSelectModule, MatOption, MatProgressSpinner } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingComponent } from './loading/loading.component';
import { AnuncioService } from './services/anuncio.service';
import { MaterialModule } from 'material.module';
import { FotoComponent } from './foto/foto.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { FotoModule } from './foto/foto.module';
import { PluckPipe } from './pipe/pluck.pipe';
import { UsuarioModule } from './usuario/usuario/usuario.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    ComponentsModule,
    RouterModule,    
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    AnuncioModule,
    UsuarioModule,
    FotoModule,
    MatSelectModule,
    MaterialModule ,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoadingComponent,
    PluckPipe   

  ],entryComponents: [LoadingComponent, FotoComponent],
  
  providers: [AnuncioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
