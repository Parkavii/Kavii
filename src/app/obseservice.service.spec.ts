import { TestBed } from '@angular/core/testing';

import { ObseserviceService } from './obseservice.service';

describe('ObseserviceService', () => {
  let service: ObseserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObseserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
