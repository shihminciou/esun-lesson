import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    account: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Your form data : ', this.loginForm.value );
  }

}
