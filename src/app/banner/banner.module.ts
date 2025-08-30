import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerFilterComponent } from './banner-filter/banner-filter.component';
import { BannerListComponent } from './banner-list/banner-list.component';

@NgModule({
  declarations: [BannerFilterComponent, BannerListComponent],
  imports: [
    CommonModule
  ]
})
export class BannerModule { }
