import React from 'react';
import { Title } from '../home';
import List from './List';
import { Link } from 'react-router-dom';

const Homework = () => (
  <div>
    <Title>
      📄 Homework <br />
      <small>
        <Link to="/">🛒 กลับ</Link>
      </small>
    </Title>
    <List />
  </div>
);

export default Homework;
