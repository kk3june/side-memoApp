import React from 'react';
import styled from 'styled-components';
import {Image} from 'react-native';

const Button = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 54px;
  height: 54px;
  border-radius: 27px;
  background-color: #ffcb7d;
  align-items: center;
  justify-content: center;
`;

export default function Btn({navigation}) {
  return (
    <Button
      onPress={() => {
        navigation.navigate('AddHistory');
      }}>
      <Image source={require('../../assets/images/plus.png')} />
    </Button>
  );
}
