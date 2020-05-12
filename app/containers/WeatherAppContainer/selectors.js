import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the weatherAppContainer state domain
 */

const selectWeatherAppContainerDomain = state =>
  state.weatherAppContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by WeatherAppContainer
 */

const makeSelectWeatherAppContainer = () =>
  createSelector(
    selectWeatherAppContainerDomain,
    substate => substate,
  );

const setSelectedCity = () =>
  createSelector(
    selectWeatherAppContainerDomain,
    substate => substate.citySearch,
  );

export { selectWeatherAppContainerDomain };
export { makeSelectWeatherAppContainer, setSelectedCity };
