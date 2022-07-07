import { createAction, props } from '@ngrx/store';
import { People } from '../models/people.model';

export const startLoading = createAction('[App] Start loading');

export const stopLoading = createAction('[App] Stop loading');

export const loadPeople = createAction(
    '[App] Load People'
  );
  
  export const loadPeopleSuccess = createAction(
    '[App] Load People success',
    props<{ people: People[] }>()
  );
