import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiService =  environment.api_url + '/5e79bc6230000098009301ca';

  constructor(
    private http: HttpClient,
  ) { }

  query() {
    return this.http.get(this.apiService);
  }
}
