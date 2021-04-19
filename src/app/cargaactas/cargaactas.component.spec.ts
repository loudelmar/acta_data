import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaactasComponent } from './cargaactas.component';

describe('CargaactasComponent', () => {
  let component: CargaactasComponent;
  let fixture: ComponentFixture<CargaactasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaactasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaactasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
