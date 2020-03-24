import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponseResult } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl = 'http://www.mocky.io/v2/5e79b21e3000007f00930161';

  constructor(
    private http: HttpClient,
  ) { }

  query() {
    return this.http.get<any>(this.apiUrl);
  }
}
