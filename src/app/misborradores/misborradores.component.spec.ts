import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisborradoresComponent } from './misborradores.component';

describe('MisborradoresComponent', () => {
  let component: MisborradoresComponent;
  let fixture: ComponentFixture<MisborradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisborradoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisborradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
