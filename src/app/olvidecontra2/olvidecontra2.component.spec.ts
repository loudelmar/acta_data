import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Olvidecontra2Component } from './olvidecontra2.component';

describe('Olvidecontra2Component', () => {
  let component: Olvidecontra2Component;
  let fixture: ComponentFixture<Olvidecontra2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Olvidecontra2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Olvidecontra2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
