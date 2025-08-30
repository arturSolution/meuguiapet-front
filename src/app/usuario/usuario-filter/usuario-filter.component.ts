
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { PageForm } from 'app/forms/page-form';
import { UsuarioService } from 'app/services/usuario.service';
import { View } from 'app/view';

@Component({
  selector: 'app-usuario-filter',
  templateUrl: './usuario-filter.component.html',
  styleUrls: ['./usuario-filter.component.scss']
})
export class UsuarioFilterComponent extends View implements OnInit {

  usuario: any;    
  pageForm: PageForm;  
  usuarios = [];

  constructor(public dialog: MatDialog, 
    public usuarioService: UsuarioService) { 

    super('', dialog);
  }  

  ngOnInit(): void {

    this.usuario = this.usuarioService.novo();
    this.pageForm = new PageForm();    
  }   

  limpar():void {

    this.usuario = this.usuarioService.novo();
  }  

  buscar() {
    
    this.exibirLoading();
    this.pageForm = new PageForm();
    this.pagina=0;
    this.usuarioService.filter(this.pagina, this.pageForm.size, this.usuario)
    .subscribe(page => {

      this.pageForm = page;
      this.usuarios = this.pageForm.content;
      
      this.fecharLoading();
      

    }, error => {
      
      console.error(error);
      this.fecharLoading();
    });    
    
  }


}
