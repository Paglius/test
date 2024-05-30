import { TestBed } from '@angular/core/testing';

import { OwnerTableService } from './owner-table.service';

describe('OwnerTableService', () => {
  let service: OwnerTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
