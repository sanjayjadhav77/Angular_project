import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MyHttpService {
  private apiUrl = 'https://astute-azimuth-386116-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json';  // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  // GET request example
  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  // POST request example
  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, data);
  }
}
