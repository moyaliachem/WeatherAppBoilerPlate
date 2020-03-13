/*
 *
 * WeatherAppContainer actions
 *
 */

import {
  GET_WEATHER_START,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL,
  GET_WEATHER_BY_CITY,
  GET_WEATHER_BY_CITY_CLICKED,
  GET_WEATHER_BY_CITY_SUCCESS_CLICKED,
  GET_WEATHER_BY_CITY_FAIL_CLICKED,
} from './constants';

// export function fetchWeather(weather, city) {
//   return {
//     type: GET_WEATHER,
//     weather,
//     city,
//   };
// }
export function fetchWeatherStartAction() {
  return {
    type: GET_WEATHER_START,
  };
}

export function fetchWeatherSuccessAction(weather) {
  return {
    type: GET_WEATHER_SUCCESS,
    weather,
  };
}
export function fetchWeatherFailAction(error) {
  return {
    type: GET_WEATHER_FAIL,
    error,
  };
}

export function fetchWeatherByCityAction(city) {
  return {
    type: GET_WEATHER_BY_CITY,
    city,
  };
}
