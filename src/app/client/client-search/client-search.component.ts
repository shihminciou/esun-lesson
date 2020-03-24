import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { CirciKeyValidator } from 'src/app/shared/functions/validators';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.scss']
})
export class ClientSearchComponent implements OnInit {

  ClientForm = new FormGroup({
    ID: new FormControl('',CirciKeyValidator),
    CustomerName: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit($event: Event) {
    console.log('Your form data : ', this.ClientForm.value );
  }

}
