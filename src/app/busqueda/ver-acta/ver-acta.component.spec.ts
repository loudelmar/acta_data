import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerActaComponent } from './ver-acta.component';

describe('VerActaComponent', () => {
  let component: VerActaComponent;
  let fixture: ComponentFixture<VerActaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerActaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerActaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
