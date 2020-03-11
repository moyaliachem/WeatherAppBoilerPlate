/**
 *
 * ModalWeatherLis
 *
 */

import React, { memo, useState } from 'react';
import { Modal } from 'antd';
import { Li, Span, Img } from './styledComponents';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ModalWeatherLis(props) {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = e => {
    setVisible(false);
  };

  const handleCancel = e => {
    setVisible(false);
  };
  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {props.weathers.map((ig, index) => (
          <Li onClick={props.clicked} key={ig.id}>
            <h4>{dayToday[day + index]}</h4>
            {console.log(index)}
            <Img src={`http://openweathermap.org/img/wn/${ig.icon}.png`} />
            <div>
              <Span>{ig.temp_max}°</Span>
              <Span>{ig.temp_min}°</Span>
            </div>
          </Li>
        ))}
      </Modal>
    </div>
  );
}

ModalWeatherLis.propTypes = {};

export default memo(ModalWeatherLis);
