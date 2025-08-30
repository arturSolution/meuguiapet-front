import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { UsuarioItemDataSource } from 'app/datasource/usuario-item-datasource';
import { PageForm } from 'app/forms/page-form';
import { UsuarioService } from 'app/services/usuario.service';
import { View } from 'app/view';
import { Usuario } from 'app/vo/usuario';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent extends View implements OnInit {

  @Input('usuarios')  usuarios= [];  
  @Input('pageForm')  pager: PageForm;  
  @Input('usuario')  anuncio: Usuario;  
  colunas: string[]=['item'];
  dataSource: UsuarioItemDataSource;

  
  constructor(private usuarioService: UsuarioService,    
    public snackBar: MatSnackBar,
    public loading: MatDialog    
    ) { 

      super('Lista de Usuários', loading);
    }

  ngOnInit() {
    
    this.dataSource = new UsuarioItemDataSource(this.usuarioService, this.loading);    

  }
 
  /**
   * @description Método para paginar a lista de itens do anúncio
   *
   * @param {*} event
   * @memberof CompraCadastroComponent
   */
  paginar(event) {

    this.pagina = event.pageIndex;        
    this.filtrar(event);

  }

  filtrar(event) {    
    
    this.exibirLoading();         
    this.usuarioService.filter(this.pagina, this.pager.size, this.anuncio)
    .subscribe(page => {

      this.pager = page;
      this.usuarios = this.pager.content;
      this.fecharLoading();     
      
    }, error => {
      
      console.error(error);
      this.fecharLoading();
    });    

  }

}
