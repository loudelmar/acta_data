import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Olvidecontra3Component } from './olvidecontra3.component';

describe('Olvidecontra3Component', () => {
  let component: Olvidecontra3Component;
  let fixture: ComponentFixture<Olvidecontra3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Olvidecontra3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Olvidecontra3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
