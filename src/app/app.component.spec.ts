import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { IAppStateWrapper } from './store/reducers/app.reducer';
import { PEOPLE_MOCK } from './store/mocks/people.mock';

describe('AppComponent', () => {
  let store: MockStore;
  let fixture: ComponentFixture<AppComponent>;

  const initialState: IAppStateWrapper = { app: {
    isLoading: false,
    people: []
  }};

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientModule,
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should show loading container div', () => {
    const newState = { ...initialState };
    newState.app.isLoading = true;
    store.setState({ ...newState });
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('#loading');
    expect(element).toBeTruthy();
  });

  it('should not show loading container div', () => {
    const newState = { ...initialState };
    newState.app.isLoading = false;
    store.setState({ ...newState });
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('#loading');
    expect(element).toBeFalsy();
  });

  it('should show the name of the first person on his title', () => {
    const newState = { ...initialState };
    newState.app.people = PEOPLE_MOCK;
    store.setState({ ...newState });
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('.title__'+PEOPLE_MOCK[0].id);
    console.log(element)
    expect(element.innerText).toEqual(PEOPLE_MOCK[0].name);
  });

});
