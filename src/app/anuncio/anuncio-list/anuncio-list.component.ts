import { Component, Input, OnInit } from '@angular/core';
import { Anuncio } from 'app/vo/anuncio';
import { PageForm } from 'app/forms/page-form';
import { MatSnackBar, MatDialog } from '@angular/material';
import { View } from 'app/view';
import { AnuncioService } from 'app/services/anuncio.service';
import { AnuncioItemDataSource } from 'app/datasource/anuncio-item-datasource';

@Component({
  selector: 'anuncio-list',
  templateUrl: './anuncio-list.component.html',
  styleUrls: ['./anuncio-list.component.scss']
})
export class AnuncioListComponent extends View implements OnInit {

  @Input('anuncios')  anuncios= [];  
  @Input('pageForm')  pager: PageForm;  
  @Input('anuncio')  anuncio: Anuncio;
  @Input('categoria')  categoria: any;
  colunas: string[]=['item'];
  dataSource: AnuncioItemDataSource;

  
  constructor(private anuncioService: AnuncioService,    
    public snackBar: MatSnackBar,
    public loading: MatDialog    
    ) { 

      super('Lista de Anúncios', loading);
    }

  ngOnInit() {
    
    this.dataSource = new AnuncioItemDataSource(this.anuncioService, this.loading);    

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
    this.anuncioService.filter(this.pagina, this.pager.size, this.anuncio)
    .subscribe(page => {

      this.pager = page;
      this.anuncios = this.pager.content;
      this.fecharLoading();     
      
    }, error => {
      
      console.error(error);
      this.fecharLoading();
    });    

  }
  
}
