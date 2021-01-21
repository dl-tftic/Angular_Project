import { TestBed } from '@angular/core/testing';

import { CategoryBusinessService } from './category-business.service';

describe('CategoryBusinessService', () => {
  let service: CategoryBusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryBusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
