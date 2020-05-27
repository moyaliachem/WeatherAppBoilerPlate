/**
 *
 * WeatherAppContainer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

// AntD
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Input } from 'antd';
import './index.css';
import { makeSelectWeatherAppContainer, setSelectedCity } from './selectors';
import reducer from './reducer';
import saga from './saga';

// Action
import * as actions from './actions';

// Components
import WeatherApp from '../../components/WeatherApp/index';
import WeatherList from '../../components/WeatherList/index';
import { Form } from './form';

export function WeatherAppContainer({ city, weatherData, onSearch }) {
  useInjectReducer({ key: 'weatherAppContainer', reducer });
  useInjectSaga({ key: 'weatherAppContainer', saga });

  // const [searchACity, setSearchACity] = useState('');

  // const searchCityHandler = event => {
  //   event.preventDefault();
  //   props.onSearch(searchACity);
  // };
  const H1 = styled.h1`
    color: grey;
  `;

  const { loading, weather } = weatherData;
  let load = <H1 className="Load">Loading....</H1>;
  if (!loading) {
    load = <WeatherList weathers={weather} />;
  }

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
          <H1>WEATHER FORECAST</H1>
        </div>
        <div>
          <Form>
            <Input
              className="input"
              size="default"
              name="city"
              placeholder="Search a City"
              value={city}
              onChange={onSearch}
            />
            {/* <Button type="primary" htmlType="submit">
              Search
            </Button> */}
          </Form>
        </div>
        {city === '' ? <H1>City not found....</H1> : load}
      </WeatherApp>
    </div>
  );
}

WeatherAppContainer.propTypes = {
  onSearch: PropTypes.func.isRequired,
  city: PropTypes.string,
  weatherData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  weatherData: makeSelectWeatherAppContainer(),
  city: setSelectedCity(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSearch: evt =>
      dispatch(actions.fetchWeatherByCityAction(evt.target.value)),
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
