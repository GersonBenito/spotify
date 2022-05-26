import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { generateQuery } from 'src/helpers/helpers';
import { IAutorization } from 'src/interfaces/autorization.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private urlAuth: string = env.spotify.urlAuth;
  private urlToken: string = env.spotify.urlToken;
  private urlBase: string = env.spotify.urlBase;
  private $url = new BehaviorSubject<string>('');
  private headersAuth = new HttpHeaders({
    'Content-type': 'application/x-www-form-urlencoded',
  });

  constructor( private http: HttpClient ) { }

  authorization():Observable<string>{
    const { client_id, response_type, redirect_uri, scope } = env.spotify;
    this.$url.next(`${this.urlAuth}client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}`);
    return this.$url;
  }

  getToken(code: string):Observable<IAutorization>{
    const { grant_type, redirect_uri, client_id, client_secret } = env.spotify;
    const params = {
      code: code,
      grant_type,
      redirect_uri,
      client_id,
      client_secret
    }

    const query = generateQuery(params);
    return this.http.post<IAutorization>(`${this.urlToken}`, query, {
      headers: this.headersAuth,
    })
  }

  getUser(access_token: string | object | undefined): Observable<any>{
    return this.http.get(`${this.urlBase}/me`, {
      headers: { 'Authorization': `Bearer ${access_token}` }
    })
  }

}
