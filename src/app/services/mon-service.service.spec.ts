import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';


import { MonServiceService } from './mon-service.service';

describe('MonServiceService', () => {

  let service: MonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MonServiceService]
    });

    service = TestBed.get(MonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get users list', async () => {
    const value = await service.getUsers().toPromise();
    expect(value.length).toEqual(10);
  });

});
