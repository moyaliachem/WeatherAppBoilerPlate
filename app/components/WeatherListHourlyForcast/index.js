/**
 *
 * WeatherListHourlyForcast
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'antd';
import { Li, Span, Img, Ul, Section } from './styledComponents';
import './loader.css';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function WeatherListHourlyForcast({ weatherClicked }) {
  const [Hourly, setHourly] = useState({ loading: true, weatherHour: [] });

  useEffect(() => {
    const { city, date } = weatherClicked;
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},Philippines&units=metric&appid=14c25030e41c023940363a0366a7e67f`;
    fetch(url)
      .then(response => response.json())
      .then(responseData => {
        const fetchHourDay = [];
        for (let key in responseData.list) {
          const dateWeather = responseData.list[key].dt_txt.split(' ');
          if (dateWeather[0] === date) {
            fetchHourDay.push({
              id: key,
              time: dateWeather[1],
              icon: responseData.list[key].weather[0].icon,
              temp_max: responseData.list[key].main.temp_max,
              temp_min: responseData.list[key].main.temp_min,
              main: responseData.list[key].weather[0].main,
              date: dateWeather[0],
            });
          }
        }
        setHourly({ loading: false, weatherHour: fetchHourDay });
      });
  }, []);

  let load = <h1 className="Load">Loading...</h1>;

  if (!Hourly.loading) {
    load = (
      <Ul>
        {Hourly.weatherHour.map(ig => {
          const {
            id,
            icon,
            time,
            temp_max: tempMax,
            temp_max: tempMin,
            main: weatherType,
          } = ig;
          return (
            <Li key={id}>
              <div>
                <Span>{time}</Span>
              </div>
              <div>
                <Span>{weatherType}</Span>
              </div>
              <div>
                <Img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
              </div>
              <div>
                <Span>{tempMax}°</Span>
                <Span>{tempMin}°</Span>
              </div>
            </Li>
          );
        })}
      </Ul>
    );
  }

  const { city, day, date } = weatherClicked;
  return (
    <Section className="weather-list">
      <h1> {city}</h1>
      <h3>
        HOURLY FORECAST - {day} {date}
      </h3>
      {load}
      <Link to="/">
        <Button type="primary">Back</Button>
      </Link>
    </Section>
  );
}

WeatherListHourlyForcast.propTypes = {
  weatherClicked: PropTypes.object,
};

export default memo(WeatherListHourlyForcast);
