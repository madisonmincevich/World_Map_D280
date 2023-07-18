import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchCountryData(countryId: string): Observable<any> {
    const url = `http://api.worldbank.org/v2/country/${countryId}?format=json`;
    return this.http.get<any>(url);
  }
}
