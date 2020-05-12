/* eslint-disable react/prop-types */
/**
 *
 * WeatherApp
 *
 */

import React, { memo } from 'react';
import Div from './div';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function WeatherApp(props) {
  return <Div className="WeatherApp">{props.children}</Div>;
}

WeatherApp.propTypes = {};

export default memo(WeatherApp);
