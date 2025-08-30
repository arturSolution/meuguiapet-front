import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnuncioComponent } from './anuncio.component';
import { AnuncioFormComponent } from './anuncio-form/anuncio-form.component';


const routes: Routes = [
  {
    path: 'anuncio',
    component: AnuncioComponent,
  },
  {
    path: 'anuncio/anuncio/:id',
    component: AnuncioFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnuncioRoutingModule { }
