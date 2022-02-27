import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

const FontText = styled.Text`
  color: #6d6d6d;
`;

const Bar = styled.View`
  width: 3px;
  height: 14px;
  background-color: #6d6d6d;
  padding: 0 8px;
`;

export default function Font100(props) {
  return (
    <View>
      <Bar />
      <FontText>{props.manager}</FontText>
      <Bar />
    </View>
  );
}
