import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarEmpleadoComponent } from './borrar-empleado.component';

describe('BorrarEmpleadoComponent', () => {
  let component: BorrarEmpleadoComponent;
  let fixture: ComponentFixture<BorrarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
