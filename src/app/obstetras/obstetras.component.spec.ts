import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObstetrasComponent } from './obstetras.component';

describe('ObstetrasComponent', () => {
  let component: ObstetrasComponent;
  let fixture: ComponentFixture<ObstetrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObstetrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObstetrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
