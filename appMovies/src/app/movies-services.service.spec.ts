import { TestBed, inject } from '@angular/core/testing';

import { MoviesServicesService } from './movies-services.service';

describe('MoviesServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesServicesService]
    });
  });

  it('should be created', inject([MoviesServicesService], (service: MoviesServicesService) => {
    expect(service).toBeTruthy();
  }));
});
