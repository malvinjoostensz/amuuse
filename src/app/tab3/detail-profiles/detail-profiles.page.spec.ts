import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailProfilesPage } from './detail-profiles.page';

describe('DetailProfilesPage', () => {
  let component: DetailProfilesPage;
  let fixture: ComponentFixture<DetailProfilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProfilesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailProfilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
