/*
 *
 * WeatherAppContainer reducer
 *
 */
import produce from 'immer';
import {
  GET_WEATHER_START,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL,
  GET_WEATHER_BY_CITY,
} from './constants';

export const initialState = {
  weather: [],
  citySearch: '',
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const weatherAppContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_WEATHER_START:
        break;
      case GET_WEATHER_SUCCESS:
        draft.weather = action.weather;
        break;
      case GET_WEATHER_FAIL:
        draft.error = action.error;
        break;
      case GET_WEATHER_BY_CITY:
        draft.citySearch = action.city;
        break;
    }
  });

export default weatherAppContainerReducer;
