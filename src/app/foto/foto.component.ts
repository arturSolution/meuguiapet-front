import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.scss']
})
export class FotoComponent {

  @Input() titulo: '';
  @Input() fotos : any;

  @Output() excluir = new EventEmitter<any>();
  @Output() adicionar = new EventEmitter<any>();
  
  totalFotos: number;

  constructor() { 

    
   
  }   

  adicionarFoto(event) {

    const size = event.target.files.lenght;  
  
    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {

          const fotoBase64 = reader.result + '';         

          this.fotos.push(fotoBase64);
          
      };

      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    } 
  }

  excluirFoto(data_item) {
    
    this.fotos = this.fotos.filter(item => item.nome !== data_item.nome);
    this.excluir.emit(data_item);
  }
}
