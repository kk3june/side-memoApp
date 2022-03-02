import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

const FontText = styled.Text`
  padding-bottom: 23px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #a9a9a9;
`;

export default function Font100(props) {
  return <FontText>{props.text}</FontText>;
}
