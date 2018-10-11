import { TestBed, inject } from '@angular/core/testing';

import { PbxService } from './pbx.service';

describe('PbxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PbxService]
    });
  });

  it('should be created', inject([PbxService], (service: PbxService) => {
    expect(service).toBeTruthy();
  }));
});
