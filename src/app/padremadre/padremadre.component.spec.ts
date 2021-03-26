import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadremadreComponent } from './padremadre.component';

describe('PadremadreComponent', () => {
  let component: PadremadreComponent;
  let fixture: ComponentFixture<PadremadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadremadreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadremadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
