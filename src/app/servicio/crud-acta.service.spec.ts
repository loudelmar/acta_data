import { TestBed } from '@angular/core/testing';

import { CrudActaService } from './crud-acta.service';

describe('CrudActaService', () => {
  let service: CrudActaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudActaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
