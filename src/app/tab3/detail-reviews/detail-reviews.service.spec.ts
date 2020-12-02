import { TestBed } from '@angular/core/testing';

import { DetailReviewsService } from './detail-reviews.service';

describe('DetailReviewsService', () => {
  let service: DetailReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
