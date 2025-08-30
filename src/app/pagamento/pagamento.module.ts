import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentoFilterComponent } from './pagamento-filter/pagamento-filter.component';
import { PagamentoListComponent } from './pagamento-list/pagamento-list.component';

@NgModule({
  declarations: [PagamentoFilterComponent, PagamentoListComponent],
  imports: [
    CommonModule
  ]
})
export class PagamentoModule { }
