/* eslint-disable react/prop-types */
/**
 *
 * WeatherList
 *
 */

import React, { memo } from 'react';
import { Li, Span, Img, Ul } from './styledComponents';
import moment from 'moment';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function WeatherList({ onClick, weathers }) {
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
      <Ul>
        {!weathers
          ? 'Not Found'
          : weathers.map((ig, index) => {
              const { id, icon, temp_max: tempMax, temp_max: tempMin } = ig;
              return (
                <Li
                  key={id}
                  onClick={ev => {
                    ev.preventDefault();
                    onClick(id);
                  }}
                >
                  <h4>
                    {day + index > 6
                      ? dayToday[counter++]
                      : dayToday[day + index]}
                    {console.log(dayToday[index])}
                  </h4>
                  {console.log('INDEX', index, 'DAY', day)}
                  <Img src={`http://openweathermap.org/img/wn/${icon}.png`} />
                  <div>
                    <Span>{tempMax}°</Span>
                    <Span>{tempMin}°</Span>
                  </div>
                </Li>
              );
            })}
      </Ul>
    </section>
  );
}

// WeatherList.propTypes = {};

export default memo(WeatherList);
