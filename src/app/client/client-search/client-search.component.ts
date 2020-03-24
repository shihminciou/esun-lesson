import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { CirciKeyValidator } from 'src/app/shared/functions/validators';
import { ClientService } from 'src/app/core/services/client.service';
import { HttpClient } from '@angular/common/http';
import { HttpResponseResult } from 'src/app/core/models/response.model';

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
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit($event: Event) {
    // console.log('Your form data : ', this.ClientForm.value );
    // this.clientService.query().subscribe((data) => console.log(data));
    this.http.get('https://www.mocky.io/v2/5e79bc6230000098009301ca').subscribe((data: HttpResponseResult) => {
      this.customers = data.Value;
    });
  }

  get isSearchFormValid(): boolean {
    return this.ClientForm.valid;
  }

}
