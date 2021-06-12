import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidecontraComponent } from './olvidecontra.component';

describe('OlvidecontraComponent', () => {
  let component: OlvidecontraComponent;
  let fixture: ComponentFixture<OlvidecontraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlvidecontraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlvidecontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
