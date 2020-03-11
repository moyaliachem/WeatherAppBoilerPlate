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
  // GET_WEATHER,
} from './constants';

// export function fetchWeather(weather, city) {
//   return {
//     type: GET_WEATHER,
//     weather,
//     city,
//   };
// }
export function fetchWeatherStart() {
  return {
    type: GET_WEATHER_START,
  };
}

export function fetchWeatherSuccess(weather) {
  return {
    type: GET_WEATHER_SUCCESS,
    weather,
  };
}
export function fetchWeatherFail(error) {
  return {
    type: GET_WEATHER_FAIL,
    error,
  };
}

export function fetchWeatherByCity(city) {
  return {
    type: GET_WEATHER_BY_CITY,
    city,
  };
}
