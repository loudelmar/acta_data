import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiperfilComponent } from './miperfil.component';

describe('MiperfilComponent', () => {
  let component: MiperfilComponent;
  let fixture: ComponentFixture<MiperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiperfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
