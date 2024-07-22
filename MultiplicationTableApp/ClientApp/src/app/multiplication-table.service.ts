import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultiplicationTableService {
  private apiUrl = 'https://localhost:7058/api/MultiplicationTable';


  constructor(private http: HttpClient) { }

  getEntries(): Observable<any> {
    return this.http.get<any>('${this.apiUrl}/entries');
  }

  addEntry(number: number): Observable<any> {
    return this.http.post<any>('${this.apiUrl}/entries', number);
  }
}
