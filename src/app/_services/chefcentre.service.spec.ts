import { TestBed } from '@angular/core/testing';

import { ChefcentreService } from './chefcentre.service';

describe('ChefcentreService', () => {
  let service: ChefcentreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefcentreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
