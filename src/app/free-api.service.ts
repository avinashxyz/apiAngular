import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FreeApiService {
  /* injecting http clent using constructor */
  constructor(private httpClient: HttpClient) {}

  getcomments(): Observable<any> {
    return this.httpClient.get(
      'assets/sample.json'
    );
  }
}
