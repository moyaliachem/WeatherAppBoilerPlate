/**
 *
 * WeatherListHourlyForcast
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Li, Span, Img, Ul, Section, H2, H1, CityH1 } from './styledComponents';
import './loader.css';
import 'antd/dist/antd.css';

function WeatherListHourlyForcast({ weatherClicked }) {
  const [hourly, setHourly] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { city, date } = weatherClicked;
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},Philippines&units=metric&appid=14c25030e41c023940363a0366a7e67f`;
    fetch(url)
      .then(response => response.json())
      .then(responseData => {
        const fetchHourDay = responseData.list.map((hourlyList, index) => {
          const dateWeather = hourlyList.dt_txt.split(' ');
          return {
            id: index,
            time: dateWeather[1],
            icon: hourlyList.weather[0].icon,
            temp_max: hourlyList.main.temp_max,
            temp_min: hourlyList.main.temp_min,
            main: hourlyList.weather[0].main,
            date: dateWeather[0],
          };
        });
        const weathers = fetchHourDay.filter(
          weatherHour => weatherHour.date === date,
        );
        setHourly(weathers);
        setLoading(false);
      });
  }, []);

  const load = <H1 className="Load">Loading...</H1>;

  const { city, day, date } = weatherClicked;
  return (
    <Section className="weather-list">
      <CityH1>{city}</CityH1>
      <H2>
        HOURLY FORECAST - {day} {date}
      </H2>
      {!loading ? (
        <Ul>
          {hourly.map(weatherHourList => {
            const {
              id,
              icon,
              time,
              temp_max: tempMax,
              temp_min: tempMin,
              main: weatherType,
            } = weatherHourList;
            return (
              <Li key={id}>
                <div>
                  <Span>{time}</Span>
                </div>
                <div>
                  <Span>{weatherType}</Span>
                </div>
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
            );
          })}
          <div>
            <Link to="/">
              <Button
                type="primary"
                size="large"
                shape="round"
                style={{
                  background: 'black',
                  borderColor: 'grey',
                  color: '#e8e4c9',
                }}
              >
                Back
              </Button>
            </Link>
          </div>
        </Ul>
      ) : (
        load
      )}
    </Section>
  );
}

WeatherListHourlyForcast.propTypes = {
  weatherClicked: PropTypes.object,
};

export default memo(WeatherListHourlyForcast);
