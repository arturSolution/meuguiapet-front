import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'app/services/usuario.service';
import { View } from 'app/view';
import { Usuario } from 'app/vo/usuario';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent extends View implements OnInit {

  usuario?: Usuario;
  usuarioSub: Subscription;

  constructor(dialog: MatDialog, public _snackBar: MatSnackBar, public route: Router,
    private actRoute: ActivatedRoute, private usuarioService: UsuarioService) { 
    
    super('', dialog);
  }

  ngOnInit() {
   
    this.usuario = this.usuarioService.novo();
    
      this.actRoute.params.subscribe(parametros => {
        
        const id = parametros['id'];
        this.usuario.id = id;
        
        if(id) {
          this.usuarioSub = this.usuarioService.findById(id).subscribe(usuario => {
              
            this.usuario = usuario;            
          });
        }
      });    
  }
 

  editar(){
    this.exibirLoading();      
    this.usuarioService.editar(this.usuario, this.usuario.id)
      .subscribe(result => {
        this.fecharLoading();  
        this._snackBar.open('Dados do Anúncio Atualizados com Sucesso', 'Registrado', { duration: 1200 });
        this.usuario = result;
        
        
      }, err => {
        this._snackBar.open('Ocorreu um erro', 'Erro', { duration: 1200 });
        console.error(err);
        this.fecharLoading();
      }); 
  }

  excluir() {

    this.exibirLoading();      
    this.usuarioService.remover(this.usuario.id)
      .subscribe(result => {
        this.fecharLoading();  
        this._snackBar.open('Anúncio excluído com sucesso', 'Excluido', { duration: 1200 });
        
        setTimeout(() => {
          this.route.navigate(["anuncio"]);
  
        }, 500);
        
        
      }, err => {
        this._snackBar.open('Ocorreu um erro', 'Erro', { duration: 1200 });
        console.error(err);
        this.fecharLoading();
      }); 
  }


}
