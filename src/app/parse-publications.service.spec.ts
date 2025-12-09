import { TestBed } from '@angular/core/testing';

import { ParsePublicationsService } from './parse-publications.service';

describe('ParsePublicationsService', () => {
  let service: ParsePublicationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParsePublicationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
