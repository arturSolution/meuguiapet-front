import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material';
import { map, catchError, finalize } from 'rxjs/operators';
import {
  Observable,
  of as observableOf,
  merge,
  BehaviorSubject,
  of
} from 'rxjs';

import { LoadingComponent } from '../loading/loading.component';
import { PageForm } from 'app/forms/page-form';
import { UsuarioService } from 'app/services/usuario.service';
import { Usuario } from 'app/vo/usuario';


/**
 *
 * @description DataSource para implementar a lista de ítens de compra
 * @export
 * @class CompraDataSource
 * @extends {DataSource<Anuncio>}
 */
export class UsuarioItemDataSource implements DataSource<Usuario> {
  data: Usuario[] = [];
  pager = new PageForm();

  public itensSubject = new BehaviorSubject<Usuario[]>([]);
  public loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(
    private servico: UsuarioService,    
    public loading: MatDialog
  ) {}

  connect(): Observable<Usuario[]> {
    return this.itensSubject.asObservable();
  }

  disconnect(): void {
    this.itensSubject.complete();
    this.loadingSubject.complete();
  }

  load(pageIndex = 0, anuncio): any {

    if (this.pager.size === undefined) {
      this.pager = new PageForm();
    }

    this.exibirLoading();
    this.loadingSubject.next(true);
    this.servico
      .filter(pageIndex, this.pager.size, anuncio)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(page => {
        this.pager = page;
        this.data = page.content;
        this.itensSubject.next(page.content);
        this.fecharLoading();
      });
  }  

  refreshConteudo() {
    this.itensSubject.next(this.data);
  }

  exibirLoading() {
    this.loading.open(LoadingComponent, {
      width: '150px'
    });
  }

  fecharLoading() {
    this.loading.closeAll();
  }
}
