import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdministradoresPage } from './administradores.page';

describe('AdministradoresPage', () => {
  let component: AdministradoresPage;
  let fixture: ComponentFixture<AdministradoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdministradoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
