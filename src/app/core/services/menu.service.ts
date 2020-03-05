import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menus = [
    {id:1,text:'顧客查詢',url:'/clients/search'},
    {id:2,text:'名單查詢',url:'/bol/search'}
  ]

  constructor() { }

  getMenu() {
    return this.menus;
  }
}
