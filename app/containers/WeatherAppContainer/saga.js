import { take, call, put, select, takeLatest } from 'redux-saga/effects';

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

export function* weatherAppContainerSaga(action) {
  try {
    yield put(actions.fetchWeatherStart());
    const data = yield fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${
        action.city
      },Philippines&units=metric&appid=14c25030e41c023940363a0366a7e67f`,
    );
    const response = yield data.json();
    const fetchWeather = [];
    for (let key in response.list) {
      const dateWeather = response.list[key].dt_txt.split(' ');
      console.log(dateWeather[1], timeSlot);
      if (dateWeather[1] === timeSlot) {
        fetchWeather.push({
          ...response.list[key].weather[0],
          id: key,
          icon: response.list[key].weather[0].icon,
          temp_max: response.list[key].main.temp_max,
          temp_min: response.list[key].main.temp_min,
          date: response.list[key].dt_txt,
        });
      }
    }
    yield put(actions.fetchWeatherSuccess(fetchWeather));
  } catch (error) {
    yield put(actions.fetchWeatherFail(error));
  }
}

export default function* weatherFetched() {
  yield takeLatest(GET_WEATHER_BY_CITY, weatherAppContainerSaga);
}
