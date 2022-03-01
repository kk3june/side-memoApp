import React from 'react';
import styled from 'styled-components';

const ButtonWrpper = styled.TouchableOpacity`
  padding: 9px 35px;
  background: #f1f1f1;
  border-radius: 5px;
`;
const ButtonText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #656565;
`;

export default function CancleBtn() {
  return (
    <ButtonWrpper>
      <ButtonText>취소</ButtonText>
    </ButtonWrpper>
  );
}
