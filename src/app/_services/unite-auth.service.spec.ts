import { TestBed } from '@angular/core/testing';

import { UniteAuthService } from './unite-auth.service';

describe('UniteAuthService', () => {
  let service: UniteAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniteAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
