import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HomeTableComponent } from "../home-table/home-table.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, HomeTableComponent]
})
export class HomeComponent {
}
