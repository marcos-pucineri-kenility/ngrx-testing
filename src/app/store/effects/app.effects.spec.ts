import { TestBed } from "@angular/core/testing";
import { Store, StoreModule } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { AppService } from "../services/app.service";
import { AppEffects } from "./app.effects";
import { provideMockActions } from '@ngrx/effects/testing';
import { AppMockService } from "../services/app.mock.service";
import { loadPeople, loadPeopleSuccess, startLoading, stopLoading } from "../actions/app.actions";
import { PEOPLE_MOCK } from "../mocks/people.mock";

describe('App Effects Testing', () => {
    let appService: AppService;
    let actions$: Observable<any>;
    let effects: AppEffects;
    let store: Store;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          StoreModule.forRoot({})
        ],
        providers: [
          AppEffects,
          provideMockActions(() => actions$),
          { provide: AppService, useClass: AppMockService }
        ]
      });
  
      appService = TestBed.inject(AppService);
      effects = TestBed.inject(AppEffects);
      store = TestBed.inject(Store);
    });

    it('should dispatch start loading in effect', () => {
        const spy = spyOn(store, 'dispatch').and.callThrough();
        actions$ = of(loadPeople());

        effects.loadPeople$.subscribe((_) => {
          expect(spy).toHaveBeenCalledWith(startLoading());
        });
    });

    it('should get data from service', () => {
        actions$ = of(loadPeople());

        effects.loadPeople$.subscribe((res) => {
            switch(res.type){
                case "[App] Load People success": 
                    expect(res).toEqual(loadPeopleSuccess({ people: [...PEOPLE_MOCK] }));
                    break;

                case "[App] Stop loading":
                    expect(res).toEqual(stopLoading());
            }
        })
    })


    it('should get data from service', () => {
        const spy = spyOn(appService, 'getPeople').and.callThrough();
        actions$ = of(loadPeople());

        effects.loadPeople$.subscribe(() => {
            expect(spy).toHaveBeenCalled();
        })
    })

});