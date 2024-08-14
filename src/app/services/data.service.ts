import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private apiUrl = 'https://product-app-74q6.onrender.com/products';
  private apiUrl = 'https://api.thedogapi.com/V1/breeds';
  

  constructor(private http: HttpClient) {}

  fetchAllData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  
}
