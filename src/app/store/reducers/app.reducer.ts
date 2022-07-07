import { createReducer, on } from '@ngrx/store';
import { People } from 'src/app/models/people.model';
import { loadPeopleSuccess, startLoading, stopLoading } from '../actions/app.actions';

export interface IAppState {
  isLoading: boolean;
  people: People[]
}

export interface IAppStateWrapper {
  app: IAppState;
}

export const initialState: IAppState = {
  isLoading: false,
  people: []
};

export const reducer = createReducer(
  initialState,
  on(startLoading, (state) => ({ ...state, isLoading: true })),
  on(stopLoading, (state) => ({ ...state, isLoading: false })),
  on(loadPeopleSuccess, (state, { people }) => ({
    ...state,
    people,
  }))
);
