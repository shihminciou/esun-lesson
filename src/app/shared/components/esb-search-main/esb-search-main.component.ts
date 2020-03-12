import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'esb-search-main',
  templateUrl: './esb-search-main.component.html',
  styleUrls: ['./esb-search-main.component.scss']
})
export class EsbSearchMainComponent implements OnInit {

  @Input('searchHeader') searchHeader = '';

  constructor() { }

  ngOnInit(): void {
  }

}
