/* eslint-disable react/prop-types */
/**
 *
 * WeatherList
 *
 */

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Li, Span, Img, Ul } from './styledComponents';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function WeatherList({ weathers }) {
  const fullDate = new Date();
  const day = fullDate.getDay();
  const dayToday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday ',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let counter = 0;

  return (
    <section className="weather-list">
      <h2>Weather</h2>
      {
        <Ul>
          {weathers.map((weatherList, index) => {
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
                    day:
                      day + index > 6
                        ? dayToday[counter]
                        : dayToday[day + index],
                  },
                }}
              >
                <Li key={id}>
                  <h4>
                    {day + index > 6
                      ? dayToday[counter++]
                      : dayToday[day + index]}
                  </h4>
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
