import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.scss']
})
export class ClientSearchComponent implements OnInit {

  ClientForm = new FormGroup({
    ID: new FormControl(),
    CustomerName: new FormControl(),
  });

  constructor() { }

  ngOnInit(): void {
  }

  handleOnSubmit() {
    console.log('Your form data : ', this.ClientForm.value );
  }

}
