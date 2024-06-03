import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Owner } from '../models/owner';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  readonly baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { 
  }
  getOwners(filter:any = {}): Observable<Owner[]>{
    return this.http.post<{data: Owner[]}>(`${this.baseUrl}/api/owner`,{filter})
    .pipe(map(response => response.data))
  }
  getOwner(id: number): Observable<Owner>{
    return this.http.get<{data: Owner}>(`${this.baseUrl}/api/owner/${id}`)
    .pipe(map(response => response.data))
  }
}
