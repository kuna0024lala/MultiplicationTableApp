import { TestBed } from '@angular/core/testing';

import { MultiplicationTableService } from './multiplication-table.service';

describe('MultiplicationTableService', () => {
  let service: MultiplicationTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiplicationTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
