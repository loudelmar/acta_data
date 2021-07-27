import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscargasComponent } from './miscargas.component';

describe('MiscargasComponent', () => {
  let component: MiscargasComponent;
  let fixture: ComponentFixture<MiscargasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscargasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
