import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('AppComponent', () => {

  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    httpTestingController = TestBed.get(HttpTestingController);

  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Connexion should be ok', () => {
    const userName = 'Bret';

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.logged).toBeFalsy();
    // making http call with the wanted testing method
    app.connection(userName);

    // creating the mock
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users?username=' + userName);
    // respond the http call made in line 39
    req.flush({});
    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();

    // my expect
    expect(app.logged).toBeTruthy();
  });
});
