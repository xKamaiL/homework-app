import React from 'react';
import NonDiv from '../common/NonDiv';
import moment from 'moment';

const DateInfo = () => (
  <NonDiv>
    <div className="text-secondary">
      <small>#{moment().format('dddd')}</small>{' '}
      <small>#{moment().format('MMMM')}</small>{' '}
      <small>#{moment().format('YYYY')}</small>
    </div>
  </NonDiv>
);

export default DateInfo;
