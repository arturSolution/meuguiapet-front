import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Anuncio } from 'app/vo/anuncio';
import { AnuncioService } from 'app/services/anuncio.service';
import { CategoriaService } from 'app/services/categoria.service';
import { View } from 'app/view';
import { MatDialog } from '@angular/material';
import { PageForm } from 'app/forms/page-form';

/**
 * @author Artur Cavalcante
 * @since 03/02/2020 21:51
 */


@Component({
  selector: 'anuncio-filter',
  templateUrl: './anuncio-filter.component.html',
  styleUrls: ['./anuncio-filter.component.scss']
})
export class AnuncioFilterComponent extends View implements OnInit {

  anuncio: Anuncio;
  categorias : [];
  anuncios: [];
  public pageForm: PageForm;

  //@Output() filtrar = new EventEmitter<any>();

  constructor(dialog: MatDialog, private anuncioService: AnuncioService,
     private categoriaService: CategoriaService) {     
    
    super('Filtro de Anúncios', dialog);
  }

  ngOnInit() {

    this.anuncio = this.anuncioService.novo();
    this.categoriaService.listar().subscribe(cat => {

    //  console.log(JSON.stringify(cat));
      this.categorias = cat;
    }), err => {

      console.log(err);
    };
  }


  buscar() {
  
    this.exibirLoading();
    this.pageForm = new PageForm();
    this.pagina=0;
    this.anuncioService.filter(this.pagina, this.pageForm.size, this.anuncio)
    .subscribe(page => {

      this.pageForm = page;
      this.anuncios = this.pageForm.content;       
      this.fecharLoading();

    }, error => {
      
      console.log(error);
      this.fecharLoading();
    });

  }

  limpar() {
    this.anuncio = this.anuncioService.novo();
  }

}
