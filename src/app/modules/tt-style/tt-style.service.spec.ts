import { TestBed, inject } from '@angular/core/testing';

import { TtStyleService } from './tt-style.service';

describe('TtStyleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TtStyleService]
    });
  });

  it('should be created', inject([TtStyleService], (service: TtStyleService) => {
    expect(service).toBeTruthy();
  }));
});
