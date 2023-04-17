import { TestBed } from '@angular/core/testing';

import { ChefuniteService } from './chefunite.service';

describe('ChefuniteService', () => {
  let service: ChefuniteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefuniteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
