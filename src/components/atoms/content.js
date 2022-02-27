import React from 'react';
import styled from 'styled-components';

const ContentA = styled.View`
  position: absolute;
  top: 59px;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export default function Content() {
  return <ContentA />;
}
