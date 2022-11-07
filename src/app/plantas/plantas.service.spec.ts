import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PlantasService } from './plantas.service';

describe('PlantasService', () => {
  let service: PlantasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PlantasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
