import { inject, Injectable } from '@angular/core';
import { OwnerService } from './owner.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Owner } from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerTableService {

  constructor() { }
  private ownerService = inject(OwnerService);
  private ownersSubject = new BehaviorSubject<Owner[]>([]);
  owners$: Observable<Owner[]> = this.ownersSubject.asObservable();
  private filter:any = {};
  getFilteredOwners():Observable<Owner[]>{
    return this.ownerService.getOwners();
  }

  setFilter(filter:any = {}){
    this.filter = filter;
    this.ownerService.getOwners(filter).subscribe(data =>
      this.ownersSubject.next(data)
    )
  }

  getFilter(){
    return this.filter;
  }
}
