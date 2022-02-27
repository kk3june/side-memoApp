import React from 'react';
import styled from 'styled-components';

const ConcodeA = styled.View`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ffcb7d;
  padding: 14px 8px;
`;

const ConcodeText = styled.Text`
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
  background-color: #ffcb7d;
`;

export default function Concode(props) {
  return (
    <ConcodeA>
      <ConcodeText>{props.concode}</ConcodeText>
    </ConcodeA>
  );
}
