import { Routes } from '@angular/router';
import { OwnerProfileComponent } from './components/owner-profile/owner-profile.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'home',title:"Michi's Land", component: HomeComponent },
    { path: 'ownerProfile/:ownerId',title:"Profile", component: OwnerProfileComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
