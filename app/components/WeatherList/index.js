/* eslint-disable react/prop-types */
/**
 *
 * WeatherList
 *
 */

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import { Li, Span, Img, Ul } from './styledComponents';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function WeatherList({ weathers }) {
  let counter = 0;

  return (
    <section className="weather-list">
      <h2>Weather</h2>
      {
        <Ul>
          {weathers.map(weatherList => {
            const fullDate = new Date();
            const dt = Moment(fullDate, 'YYYY-MM-DD HH:mm:ss').add(
              counter++,
              'days',
            );
            const {
              id,
              icon,
              temp_max: tempMax,
              temp_max: tempMin,
              main: weatherType,
              city,
              date,
            } = weatherList;
            return (
              <Link
                to={{
                  pathname: '/hour',
                  state: {
                    date,
                    city,
                    day: dt.format('dddd'),
                  },
                }}
              >
                <Li key={id}>
                  <h4>{dt.format('dddd')}</h4>
                  <Span>{weatherType}</Span>
                  <div>
                    <Img
                      src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    />
                  </div>
                  <div>
                    <Span>{tempMax}°</Span>
                    <Span>{tempMin}°</Span>
                  </div>
                </Li>
              </Link>
            );
          })}
        </Ul>
      }
    </section>
  );
}

// WeatherList.propTypes = {};

export default memo(WeatherList);
