import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFilterComponent } from './banner-filter.component';

describe('BannerFilterComponent', () => {
  let component: BannerFilterComponent;
  let fixture: ComponentFixture<BannerFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
