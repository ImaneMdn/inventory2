import { TestBed } from '@angular/core/testing';

import { ChefequipeService } from './chefequipe.service';

describe('ChefequipeService', () => {
  let service: ChefequipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefequipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
