import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailReviewsPage } from './detail-reviews.page';

describe('DetailReviewsPage', () => {
  let component: DetailReviewsPage;
  let fixture: ComponentFixture<DetailReviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailReviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
