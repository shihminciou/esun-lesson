import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    account: new FormControl()
  });

  constructor(
    private router: Router,
    private permissionsService: NgxPermissionsService
  ) { }

  ngOnInit(): void {
    const perm = ["GUEST"]; // 理論上這裡是從login後由後端api給的權限範本
    this.permissionsService.loadPermissions(perm);
  }

  onSubmit() {
    console.log('Your form data : ', this.loginForm.value );
    this.router.navigate(['']);
  }

}
