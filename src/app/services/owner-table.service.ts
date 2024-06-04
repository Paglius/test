import { inject, Injectable, signal, Signal } from '@angular/core';
import { OwnerService } from './owner.service';
import { switchMap } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class OwnerTableService {

  constructor() { }
  private ownerService = inject(OwnerService);
  filter = signal({});
  filteredOwners = toSignal(
    toObservable(this.filter)
    .pipe(
      switchMap( filter => this.ownerService.getOwners(filter))
    )
  , {initialValue: []})

}
