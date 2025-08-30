import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoFilterComponent } from './pagamento-filter.component';

describe('PagamentoFilterComponent', () => {
  let component: PagamentoFilterComponent;
  let fixture: ComponentFixture<PagamentoFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
