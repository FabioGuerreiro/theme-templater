import { TestBed, inject } from '@angular/core/testing';

import { RestMockService } from './rest-mock.service';

describe('RestMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestMockService]
    });
  });

  it('should be created', inject([RestMockService], (service: RestMockService) => {
    expect(service).toBeTruthy();
  }));
});
