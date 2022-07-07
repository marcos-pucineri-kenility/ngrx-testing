import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppService } from './app.service';
import { PEOPLE_MOCK } from '../mocks/people.mock';


describe('ProductsService', () => {
  let service: AppService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: []
    });
    service = TestBed.inject(AppService);
  });

  beforeEach(() => {
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPeople', () => {
    it('should return people data', (done) => {
      service.getPeople().subscribe((data) => {
        expect(data).toEqual(PEOPLE_MOCK);
        done();
      }); 
      
      const req = httpMock.expectOne({
        method: 'GET',
        url: service.apiUrl
      });
      
      req.flush(PEOPLE_MOCK);
    });

  });
});
