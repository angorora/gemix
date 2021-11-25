import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { GemixApiService } from './gemix-api.service';

describe('GemixApiService', () => {
  let service: GemixApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(GemixApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
