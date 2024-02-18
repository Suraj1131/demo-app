import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'http://localhost:8005/api/v1/users';

  constructor(private http: HttpClient) { }

  getDataFromAPI() {
    return this.http.get<any>(`${this.apiUrl}/getAllUsers`);
  }

  saveFormData(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(`${this.apiUrl}/createUser`, data, httpOptions);
  }
}

