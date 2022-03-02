import React from 'react';
import styled from 'styled-components';
import {Image} from 'react-native';

const Wrapper = styled.View`
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  margin: auto;
  padding: 30px 0;
  width: 240px;
  height: 240px;
  background: #ffffff;
  border: 1px solid #ffcb7d;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export default function MarkWrapper() {
  return (
    <Wrapper>
      <Image source={require('../../assets/images/mark.png')} />
    </Wrapper>
  );
}
