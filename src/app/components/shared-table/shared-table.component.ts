import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-shared-table',
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
  templateUrl: './shared-table.component.html',
  styleUrl: './shared-table.component.scss'
})
export class SharedTableComponent {
  @Input() set tableData (data:any[]) {
    this.dataSource.data = data;
  };
  @Input() set paginator (pag:MatPaginator) {
    this.dataSource.paginator  = pag;
  };
  @Input({required: true}) columnsToDisplay: string[] =[];
  @Output() rowClick: EventEmitter<any> = new EventEmitter();
  dataSource = new MatTableDataSource<any>(this.tableData);
  
  onRowClick(row: any){
    this.rowClick.emit(row);
  }
}
