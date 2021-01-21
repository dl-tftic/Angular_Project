import { TestBed } from '@angular/core/testing';

import { BaseBusinessService } from './base-business.service';

describe('BaseBusinessService', () => {
  let service: BaseBusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseBusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
