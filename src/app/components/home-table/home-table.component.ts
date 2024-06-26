import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { SharedTableComponent } from "../shared-table/shared-table.component";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { OwnerTableService } from '../../services/owner-table.service';
import { Owner } from '../../models/owner';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'
import { MatDialog } from '@angular/material/dialog';
import { FilterComponent } from '../filter/filter.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home-table',
    standalone: true,
    templateUrl: './home-table.component.html',
    styleUrl: './home-table.component.scss',
    imports: [ SharedTableComponent, MatButtonModule, MatIconModule, MatPaginatorModule]
})
export class HomeTableComponent implements OnInit {
    protected tableService = inject(OwnerTableService)
    private dialog = inject(MatDialog)
    private router = inject(Router)
    columns = ['name','lastName','city','age','pets']
    tableData: Owner[] = [];
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    ngOnInit(): void {
        this.tableService.owners$.subscribe((data)=>{this.tableData = data })
        this.tableService.setFilter();
    }
    openDialog() {
        this.dialog.open(FilterComponent, {
        });
    }
    goToOwnerProfile(owner:Owner){
        this.router.navigate(['/ownerProfile', owner.id])
    }

}
