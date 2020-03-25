import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { CirciKeyValidator } from 'src/app/shared/functions/validators';
import { ClientService } from 'src/app/core/services/client.service';
import { HttpClient } from '@angular/common/http';
import { HttpResponseResult } from 'src/app/core/models/response.model';
import { NgxPermissionsService } from 'ngx-permissions';

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

  customers:any;

  constructor(
    private clientService: ClientService,
    private http: HttpClient,
    private permissionsService: NgxPermissionsService
  ) { }

  ngOnInit(): void {
    const perm = ["GUEST"]; // 理論上這裡是從login後由後端api給的權限範本
    this.permissionsService.loadPermissions(perm);
  }

  onSubmit($event: Event) {
    // console.log('Your form data : ', this.ClientForm.value );
    this.clientService.query().subscribe((data: HttpResponseResult) => {
        this.customers = data.Value;
    });

    // this.http.get('https://www.mocky.io/v2/5e79bc6230000098009301ca').subscribe((data: HttpResponseResult) => {
    //   this.customers = data.Value;
    // });
  }

  get isSearchFormValid(): boolean {
    return this.ClientForm.valid;
  }

}
