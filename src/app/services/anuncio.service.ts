import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Config } from 'app/config/app.config';
import { Anuncio } from 'app/vo/anuncio';

/**
 * @author Artur Cavalcante
 * @since 29/01/2020 21:39
 * @description classe responsável por manter os anúncios a nível de administrador
 */

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

 private URL = Config.AMBIENTE;
 private ENDPOINT = '/anuncios';

 constructor(private http: HttpClient) { }


  public novo(): Anuncio {
    const anuncio : Anuncio = {
      id: null,
      categoria: {
        id:null,
        nome:''
      },
      codAutor: null,
      descricao: '',
      endereco: '',
      titulo: '',
      fotoPrincipal: '',
      fotos: null
    }

    return anuncio;

  }
  
  public filter(page, linesPerPage, obj): Observable<any> {
    const params = new HttpParams()
    .set('page', page)
    .set('linesPerPage', linesPerPage)
    .set('anuncio', JSON.stringify(obj));

    return this.http.get(this.URL + this.ENDPOINT + '/', {params});
  }

  public findById(id): Observable<any> {         

    return this.http.get(this.URL + this.ENDPOINT + '/' + id);
  }

  public editar(vo, id):Observable<any> {

    return this.http.put(this.URL + this.ENDPOINT +"/"+ id, vo);
  }

  public remover(id):Observable<any> {

    return this.http.delete(this.URL + this.ENDPOINT + '/' + id);
  }

}
