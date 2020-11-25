import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelpsPage } from './helps.page';

describe('HelpsPage', () => {
  let component: HelpsPage;
  let fixture: ComponentFixture<HelpsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
