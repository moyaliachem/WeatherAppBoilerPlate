/* eslint-disable react/prop-types */
/**
 *
 * WeatherList
 *
 */

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import { Li, Span, Img, Ul, H1, DateFormat } from './styledComponents';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function WeatherList({ weathers }) {
  return (
    <section className="weather-list">
      <DateFormat>{Moment().format('LLLL')}</DateFormat>
      {
        <Ul>
          {weathers.map((weatherList, index) => {
            const fullDate = new Date();
            const dt = Moment(fullDate, 'YYYY-MM-DD HH:mm:ss').add(
              index,
              'days',
            );
            const {
              id,
              icon,
              temp_max: tempMax,
              temp_min: tempMin,
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
                key={id}
              >
                <Li>
                  <H1>{dt.format('dddd')}</H1>
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
