import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

const FontText = styled.Text`
  color: #6d6d6d;
`;

export default function Font100(props) {
  return (
    <View>
      <FontText>{props.manager}</FontText>
    </View>
  );
}
