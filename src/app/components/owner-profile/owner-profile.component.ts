import { Observable } from 'rxjs';
import { OwnerService } from './../../services/owner.service';
import { Component, inject, OnInit, Signal } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ActivatedRoute } from '@angular/router';
import { Owner } from '../../models/owner';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SharedTableComponent } from "../shared-table/shared-table.component";

@Component({
    selector: 'app-owner-profile',
    standalone: true,
    templateUrl: './owner-profile.component.html',
    styleUrl: './owner-profile.component.scss',
    imports: [CommonModule, HeaderComponent, MatIconModule, SharedTableComponent]
})
export class OwnerProfileComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  owner!:Signal<Owner|undefined>;
  columns=['name', 'breed', 'age']
  constructor(ownerService :OwnerService){
    const ownerId = this.activatedRoute.snapshot.params['ownerId']
    this.owner = ownerService.getOwner(ownerId);
  }
  ngOnInit(): void {
  }

  getOwnerPhotoId(id:number){
    const idArray = id.toString().split('')
    let photoId;
    if(id > 9){
      photoId =  (parseInt(idArray[1])|| parseInt(idArray[0]))
    }else{
      photoId = parseInt(idArray[0])
    }
    return (photoId || 1).toString();
  }

}
