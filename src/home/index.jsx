import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import DateInfo from './DateInfo';
import Tab from './Tab';
import { Row, Col } from './Util';

export const Title = styled.h1`
  border-bottom: 2px solid #cccc;
  text-align: center;
  padding-bottom: 10px;
  margin-bottom: 40px;
`;

const HomeWrapper = styled.div``;
const Home = () => (
  <HomeWrapper className="container">
    <Title>
      😄 I'm{' '}
      <a href="https://fb.com/KamaiL" target="_blank" className="text-white">
        xKamaiL
      </a>. <br /> <DateInfo />
    </Title>
    <Row>
      <Tab name="Homework" logo="✏️" route="/homework" />
      <Tab name="Todo" logo="🎉" route="/todo" />
    </Row>
  </HomeWrapper>
);

export default Home;
