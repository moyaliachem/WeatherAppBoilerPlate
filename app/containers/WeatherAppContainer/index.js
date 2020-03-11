/**
 *
 * WeatherAppContainer
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

// AntD
// import 'antd/dist/antd.css';
import { Input } from 'antd';
import { makeSelectWeatherAppContainer, setSelectedCity } from './selectors';
import reducer from './reducer';
import saga from './saga';

// Action
import * as actions from './actions';

// Components
import WeatherApp from '../../components/WeatherApp/index';
import WeatherList from '../../components/WeatherList/index';
import { Form } from './form';

export function WeatherAppContainer(props) {
  useInjectReducer({ key: 'weatherAppContainer', reducer });
  useInjectSaga({ key: 'weatherAppContainer', saga });

  const [searchACity, setSearchACity] = useState('');

  const searchCityHandler = event => {
    event.preventDefault();
    props.onSearch(searchACity);
  };

  return (
    <div>
      <WeatherApp>
        <Helmet>
          <title>Weather Application</title>
          <meta
            name="description"
            content="Description of WeatherAppContainer"
          />
        </Helmet>
        <div>
          <h1>Weather for the city of: {props.city}</h1>
        </div>
        <WeatherList
          weathers={props.weatherData.weather}
          onClick={id => console.log(id)}
        />
        <Form onSubmit={searchCityHandler}>
          <Input
            name="City"
            placeholder="Input a City"
            value={searchACity}
            onChange={event => {
              setSearchACity(event.target.value);
            }}
          />
          <button type="submit">Search</button>
        </Form>
      </WeatherApp>
    </div>
  );
}

WeatherAppContainer.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  searchACity: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  weatherData: makeSelectWeatherAppContainer(),
  city: setSelectedCity(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSearch: searchCity => dispatch(actions.fetchWeatherByCity(searchCity)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(WeatherAppContainer);
