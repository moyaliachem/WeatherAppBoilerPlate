import { put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';

import { GET_WEATHER_BY_CITY } from './constants';
// Individual exports for testing
const d = new Date();
const cHours = d.getHours();

let timeSlot = '';
if (cHours >= 0 && cHours < 3) {
  timeSlot = '00:00:00';
} else if (cHours >= 3 && cHours < 6) {
  timeSlot = '03:00:00';
} else if (cHours >= 6 && cHours < 9) {
  timeSlot = '06:00:00';
} else if (cHours >= 9 && cHours < 12) {
  timeSlot = '09:00:00';
} else if (cHours >= 12 && cHours < 15) {
  timeSlot = '12:00:00';
} else if (cHours >= 15 && cHours < 18) {
  timeSlot = '15:00:00';
} else if (cHours >= 18 && cHours < 21) {
  timeSlot = '18:00:00';
} else if (cHours >= 21) {
  timeSlot = '21:00:00';
}

export function* weatherAppContainerListByDaySaga(action) {
  try {
    const { city } = action;
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},Philippines&cnt=40&units=metric&appid=14c25030e41c023940363a0366a7e67f`;
    yield put(actions.fetchWeatherStartAction());
    const data = yield fetch(url);
    const response = yield data.json();
    const fetchWeather = [];
    response.list.map((weatherList, index) => {
      const dateWeather = weatherList.dt_txt.split(' ');
      fetchWeather.push({
        id: index,
        main: weatherList.weather[0].main,
        icon: weatherList.weather[0].icon,
        temp_max: weatherList.main.temp_max,
        temp_min: weatherList.main.temp_min,
        time: dateWeather[1],
        date: dateWeather[0],
        city,
      });
    });
    const weathers = fetchWeather.filter(weather => weather.time === timeSlot);

    yield put(actions.fetchWeatherSuccessAction(weathers));
  } catch (error) {
    yield put(actions.fetchWeatherFailAction(error));
  }
}

export default function* weatherFetched() {
  yield takeLatest(GET_WEATHER_BY_CITY, weatherAppContainerListByDaySaga);
}
