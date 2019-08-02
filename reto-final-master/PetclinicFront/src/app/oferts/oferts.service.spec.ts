import { TestBed, inject } from '@angular/core/testing';

import { OfertsService } from './oferts.service';

describe('OfertsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfertsService]
    });
  });

  it('should be created', inject([OfertsService], (service: OfertsService) => {
    expect(service).toBeTruthy();
  }));
});
