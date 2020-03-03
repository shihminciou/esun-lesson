import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'esb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus = [
    {id:1,text:'顧客查詢',url:'/clients/search'},
    {id:2,text:'名單查詢',url:'/bol/search'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
