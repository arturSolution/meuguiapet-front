import { Component, Input, OnInit } from '@angular/core';
import { Anuncio } from 'app/vo/anuncio';

@Component({
  selector: 'app-anuncio-item',
  templateUrl: './anuncio-item.component.html',
  styleUrls: ['./anuncio-item.component.scss']
})
export class AnuncioItemComponent implements OnInit {

  @Input('anuncio')  anuncio: Anuncio;

  constructor() { }

  ngOnInit() {
  }

}
