import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarperfilComponent } from './editarperfil.component';

describe('EditarperfilComponent', () => {
  let component: EditarperfilComponent;
  let fixture: ComponentFixture<EditarperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarperfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
