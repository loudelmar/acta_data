import { TestBed } from '@angular/core/testing';

import { ActasService } from './actas.service';

describe('ActasService', () => {
  let service: ActasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
