
import { PEOPLE_MOCK } from '../../mocks/people.mock';
import * as actions from './app.actions'

describe('App actions testing', () => {
    it('should return startLoading action', () => {
      const { type } = actions.startLoading();
      expect(type).toBe('[App] Start loading');
    });

    it('should return stopLoading action', () => {
      const { type } = actions.stopLoading();
      expect(type).toBe('[App] Stop loading');
    });

    it('should return loadPeople action', () => {
      const { type } = actions.loadPeople();
      expect(type).toBe('[App] Load People');
    });

    it('should return loadPeopleSuccess action', () => {
      const { type } = actions.loadPeopleSuccess({ people: PEOPLE_MOCK });
      expect(type).toBe('[App] Load People success');
    });
})