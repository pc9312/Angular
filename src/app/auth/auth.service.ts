import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { API_URLS } from '../api-urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(userId: string, password:string){
    const apiUrl = `
    ${environment.apiServer.host}:${environment.apiServer.port}${API_URLS.authentication.url}
    `;
    return this.http.post(apiUrl,{userId: userId, password: password});
  }

}
