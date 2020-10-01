import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActasComponent } from './actas.component';

describe('ActasComponent', () => {
  let component: ActasComponent;
  let fixture: ComponentFixture<ActasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
