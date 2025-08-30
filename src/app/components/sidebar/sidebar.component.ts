import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Painel Principal',  icon: 'dashboard', class: '' },    
    { path: '/usuario', title: 'Usuários',  icon:'content_paste', class: '' },
    { path: '/anuncio', title: 'Anúncios',  icon:'content_paste', class: '' },
    /*{ path: '/banner', title: 'Banners',  icon:'content_paste', class: '' },
    { path: '/denuncia', title: 'Denúncias',  icon:'content_paste', class: '' }  */
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
