import React from 'react';
import {View, Image} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #ffcb7d;
`;

const LogoImg = styled.Image`
  width: 168px;
  height: 57px;
`;

const AppName = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
`;

export default function Splash() {
  return (
    <Container>
      <LogoImg source={require('./src/assets/images/logo.png')} />
      <AppName>YOUNGMO</AppName>
    </Container>
  );
}
