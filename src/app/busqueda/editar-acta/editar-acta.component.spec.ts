import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarActaComponent } from './editar-acta.component';

describe('EditarActaComponent', () => {
  let component: EditarActaComponent;
  let fixture: ComponentFixture<EditarActaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarActaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarActaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
