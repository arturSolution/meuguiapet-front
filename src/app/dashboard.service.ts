import { Injectable } from '@angular/core';
import { Config } from './config/app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


/**
 * @author Artur Cavalcante
 * @since 29/01/2020 21:39
 * @description classe responsável pelo dashboard da aplicação
 */
export class DashboardService {  

 private URL = Config.AMBIENTE;
 private ENDPOINT = '/dash';

 constructor(private http: HttpClient) { }

  public filter(): Observable<any> {    

    return this.http.get(this.URL + this.ENDPOINT + '/');
  }
}
