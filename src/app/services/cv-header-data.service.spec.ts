import { TestBed } from '@angular/core/testing';

import { CvHeaderDataService } from './cv-header-data.service';

describe('HeaderDataService', () => {
  let service: CvHeaderDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvHeaderDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
