import { delay, Observable, of } from 'rxjs';
import { PEOPLE_MOCK } from '../mocks/people.mock';
import { People } from '../models/people.model';

export class AppMockService {
    getPeople(): Observable<People[]> {
        return of(PEOPLE_MOCK);
    }  
}

