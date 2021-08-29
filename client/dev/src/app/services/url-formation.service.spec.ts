import { TestBed } from '@angular/core/testing';

import { UrlFormationService } from './url-formation.service';

describe('UrlFormationService', () => {
  let service: UrlFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
