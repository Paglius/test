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
export class SharedTableComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      switch (propName) {
        case 'tableData': {
          this.dataSource.data = this.tableData;
          break;
        }
        case 'paginator': {
          this.dataSource.paginator  = this.paginator;
          break
        }
      }
    }
    
  }
  @Input() tableData: any[] =[];
  @Input({required: true}) columnsToDisplay: string[] =[];
  @Input() paginator!: MatPaginator;
  @Output() rowClick: EventEmitter<any> = new EventEmitter();
  dataSource = new MatTableDataSource<any>(this.tableData);
  
  onRowClick(row: any){
    this.rowClick.emit(row);
  }
}
