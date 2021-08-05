import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { environment } from '../../../environments/environment'

import { LoginCredentials } from '../models/credentials'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = environment.apiUrl

  constructor(private http: HttpClient) {}

  login(credentials: LoginCredentials): Observable<string> {
    const url = this.API_URL + '/login'

    return this.http.post(url, credentials, { responseType: 'text' })
  }
}
