import React from 'react';

import styled from 'styled-components';

const TabButton = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const LogoEmoji = styled.h1`
  font-size: 5rem;
`;

const Tab = ({ name, route, logo }) => (
  <TabButton className="col-md-4">
    <div className="card" style={{ background: 'none' }}>
      <div className="card-body">
        <div className="text-center">
          <LogoEmoji>{logo}</LogoEmoji>
          <h1 className="text-white">{name}</h1>
        </div>
      </div>
    </div>
  </TabButton>
);
export default Tab;
