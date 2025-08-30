import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioFormComponent } from '../usuario-form/usuario-form.component';
import { UsuarioComponent } from '../usuario.component';


const routes: Routes = [
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
  {
    path: 'usuario/usuario/:id',
    component: UsuarioFormComponent,
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
