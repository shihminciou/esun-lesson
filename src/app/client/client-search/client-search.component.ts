import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.scss']
})
export class ClientSearchComponent implements OnInit {

  ClientForm = new FormGroup({
    ID: new FormControl('',[Validators.minLength(2)]),
    CustomerName: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit($event: Event) {
    console.log('Your form data : ', this.ClientForm.value );
  }

}
