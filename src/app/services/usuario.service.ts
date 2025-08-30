import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'app/config/app.config';
import { Usuario } from 'app/vo/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  private URL = Config.AMBIENTE;
  private ENDPOINT = '/usuarios';

  public novo(): Usuario {
    const usuario : Usuario = {
      id: null,            
      nome: '',      
      sobreNome: '',
      fone: '',
      foto: '',      
      email: '',
      login: '',
      senha: '',
      dataCadastro: null
      
    }

    return usuario;
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

  public filter(page, linesPerPage, obj): Observable<any> {
    page = (page < 0) ? 0 : page;
    const params = new HttpParams()
      .set('page', page)
      .set('linesPerPage', linesPerPage)
      .set('usuario', JSON.stringify(obj));

    return this.http.get(this.URL + this.ENDPOINT + '/', { params });
  }
}
