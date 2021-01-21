import { TestBed } from '@angular/core/testing';

import { RolesFromApiService } from './rolesFromApi.service';

describe('RolesService', () => {
  let service: RolesFromApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolesFromApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
