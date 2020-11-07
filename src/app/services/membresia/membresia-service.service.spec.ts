import { TestBed } from '@angular/core/testing';

import { MembresiaServiceService } from './membresia-service.service';

describe('MembresiaServiceService', () => {
  let service: MembresiaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembresiaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
