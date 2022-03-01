import React from 'react';
import styled from 'styled-components';

const ButtonWrpper = styled.TouchableOpacity`
  padding: 9px 35px;
  background: #ffcb7d;
  border-radius: 5px;
  width: 100%;
`;
const ButtonText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  text-align: center;
`;

export default function ConfirmBtn() {
  return (
    <ButtonWrpper>
      <ButtonText>확인</ButtonText>
    </ButtonWrpper>
  );
}
