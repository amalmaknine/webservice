import { TestBed } from '@angular/core/testing';

import { SubsciberService } from './subsciber.service';

describe('SubsciberService', () => {
  let service: SubsciberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubsciberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
