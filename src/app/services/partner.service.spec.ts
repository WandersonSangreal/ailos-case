import { TestBed } from '@angular/core/testing';

import { PartnerService } from './partnes.service';

describe('PartnesService', () => {
  let service: PartnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
