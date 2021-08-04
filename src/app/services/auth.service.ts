import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { API_URLS } from '../api-urls';
import { User } from '../data-model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = new User();

  constructor(private http: HttpClient) { }

  login(userId: string, password:string){
    const apiUrl = `
    ${environment.apiServer.host}:${environment.apiServer.port}${API_URLS.authentication.url}
    `;
    return this.http.post(apiUrl,{userId: userId, password: password}).pipe(
      tap(data => {
        if(data){
          this.user = new User(userId);
        }
      })
    );
  }

}
