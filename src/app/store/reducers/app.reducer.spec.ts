import { loadPeopleSuccess, startLoading, stopLoading } from "../actions/app.actions";
import { PEOPLE_MOCK } from "../../mocks/people.mock";
import { initialState, reducer } from "./app.reducer";

describe('Reducer testing', () => {
    
    it('should be isLoading true', () => {
        const action = startLoading();
        const state = reducer({ ...initialState }, action);

        expect(state.isLoading).toBeTrue();
    });

    it('should be isLoading false', () => {
        const action = stopLoading();
        const result = reducer({ ...initialState, isLoading: true }, action);

        expect(result.isLoading).toBeFalse();
    });


    it('should be load people', () => {
        const action = loadPeopleSuccess({ people: PEOPLE_MOCK });
        const result = reducer({ ...initialState }, action);
        expect(result.people.length).toEqual(PEOPLE_MOCK.length);
    });
});