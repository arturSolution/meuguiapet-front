import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { Anuncio } from 'app/vo/anuncio';
import { ActivatedRoute, Router } from '@angular/router';
import { AnuncioService } from 'app/services/anuncio.service';
import { Subscription } from 'rxjs';
import { View } from 'app/view';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-anuncio-form',
  templateUrl: './anuncio-form.component.html',
  styleUrls: ['./anuncio-form.component.scss']
})
export class AnuncioFormComponent extends View implements OnInit {

  anuncio?: Anuncio;
  anuncioSub: Subscription;

  constructor(dialog: MatDialog, public _snackBar: MatSnackBar, public route: Router,private actRoute: ActivatedRoute, private cdRef: ChangeDetectorRef, private anuncioService: AnuncioService) { 
    
    super('', dialog);
  }

  ngOnInit() {
   
    this.anuncio = this.anuncioService.novo();
    
      this.actRoute.params.subscribe(parametros => {
        
        const id = parametros['id'];
        this.anuncio.id = id;
        
        if(id) {
          this.anuncioSub = this.anuncioService.findById(id).subscribe(anuncio => {
              
            this.anuncio = anuncio;            
          });
        }
      });    
  }
 

  editar(){
    this.exibirLoading();      
    this.anuncioService.editar(this.anuncio, this.anuncio.id)
      .subscribe(result => {
        this.fecharLoading();  
        this._snackBar.open('Dados do Anúncio Atualizados com Sucesso', 'Registrado', { duration: 1200 });
        this.anuncio = result;
        
        
      }, err => {
        this._snackBar.open('Ocorreu um erro', 'Erro', { duration: 1200 });
        console.error(err);
        this.fecharLoading();
      }); 
  }

  excluir() {

    this.exibirLoading();      
    this.anuncioService.remover(this.anuncio.id)
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
