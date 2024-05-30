import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { OwnerTableService } from '../../services/owner-table.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ MatInputModule, MatFormFieldModule, MatSliderModule, MatButtonModule, ReactiveFormsModule, MatIconModule, MatDialogModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder,private tableService:OwnerTableService) {
    this.userForm = this.fb.group({
      name: [''],
      lastName: [''],
      city: [''],
      minAge: [0],
      maxAge:[100]// default value for the range slider
    });
  }
  ngOnInit(): void {
    const currentFilter = this.tableService.getFilter();
    this.userForm.patchValue(currentFilter);
  }

  onSubmit() {
    this.tableService.setFilter(this.userForm.value)
  }
}
