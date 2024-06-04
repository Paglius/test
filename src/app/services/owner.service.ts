import { Injectable, Signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Owner } from '../models/owner';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop'

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
  getOwner(id: number): Signal<Owner | undefined>{
    const request$ = this.http.get<{data: Owner}>(`${this.baseUrl}/api/owner/${id}`)
    .pipe(map(response => response.data))
    return toSignal(request$)
  }
}
