import { Injectable } from '@angular/core';
import { Config } from 'app/config/app.config';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private URL = Config.AMBIENTE;
  private ENDPOINT = '/categorias';

 constructor(private http: HttpClient) { }

  public listar() : Observable<any> {

    return this.http.get(this.URL + this.ENDPOINT + '/');
  }

}
