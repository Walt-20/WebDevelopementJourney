import { TestBed } from '@angular/core/testing';

import { DbmsServiceService } from './dbms-service.service';

describe('DbmsServiceService', () => {
  let service: DbmsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbmsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
