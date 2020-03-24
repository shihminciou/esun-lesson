import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl = 'https://www.mocky.io/v2/5e79bc6230000098009301ca';

  constructor(
    private http: HttpClient,
  ) { }

  query() {
    return this.http.get(this.apiUrl);
  }
}
