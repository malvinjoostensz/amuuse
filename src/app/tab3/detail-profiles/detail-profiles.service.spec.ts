import { TestBed } from '@angular/core/testing';

import { DetailProfilesService } from './detail-profiles.service';

describe('DetailProfilesService', () => {
  let service: DetailProfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailProfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
