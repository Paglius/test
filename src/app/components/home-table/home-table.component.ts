import { Component } from '@angular/core';
import { SharedTableComponent } from "../shared-table/shared-table.component";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-home-table',
    standalone: true,
    templateUrl: './home-table.component.html',
    styleUrl: './home-table.component.scss',
    imports: [ SharedTableComponent, MatButtonModule, MatIconModule]
})
export class HomeTableComponent {

}
