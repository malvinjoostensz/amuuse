import { TestBed } from '@angular/core/testing';

import { WritereviewsService } from './writereviews.service';

describe('WritereviewsService', () => {
  let service: WritereviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WritereviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
