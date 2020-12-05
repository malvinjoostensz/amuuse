import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WritereviewsPage } from './writereviews.page';

describe('WritereviewsPage', () => {
  let component: WritereviewsPage;
  let fixture: ComponentFixture<WritereviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritereviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WritereviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
