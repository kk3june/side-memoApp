import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  background-color: #ffcb7d;
`;

const Section = styled.View`
  position: absolute;
  top: 43px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 25px 10px;
`;

const WrapperHeader = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 19px;
  padding: 12px;
`;

const AddHeader = styled.Text`
  color: #333;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 8px;
`;

const Highlight = styled.Text`
  color: red;
`;

const AddInput = styled.TextInput`
  width: 100%;
  height: 35px;
  padding: 9px 10px;
  border: 1px solid #ffcb7d;
  border-radius: 5px;
  margin-bottom: 16px;
`;

const AddContent = styled.TextInput`
  width: 100%;
  height: 145px;
  padding: 10px;
  border: 1px solid #ffcb7d;
  border-radius: 5px;
`;

const SaveBtn = styled.TouchableOpacity`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 60px;
  background-color: #ffcb7d;
`;

const SaveBtnTitle = styled.Text`
  padding: 20px 0;
  text-align: center;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

export default function EditInfo() {
  return (
    <Wrapper>
      <Section>
        <AddHeader>
          업체명 <Highlight>*</Highlight>
        </AddHeader>
        <AddInput placeholder="영업하는 업체명을 입력하세요." />
        <AddHeader>
          담당자명 <Highlight>*</Highlight>
        </AddHeader>
        <AddInput placeholder="담당자 또는 점주의 이름을 입력하세요." />
        <AddHeader>
          연락처 1 <Highlight>*</Highlight>
        </AddHeader>
        <AddInput placeholder="담당자 또는 점주의 연락처를 입력하세요." />
        <AddHeader>
          연락처 2 <Highlight>*</Highlight>
        </AddHeader>
        <AddInput placeholder="담당자 또는 점주의 연락처를 입력하세요." />
        <AddHeader>
          메모 <Highlight>*</Highlight>
        </AddHeader>
        <AddContent placeholder="자유롭게 메모를 입력하세요." />
      </Section>
      <SaveBtn>
        <SaveBtnTitle>저장</SaveBtnTitle>
      </SaveBtn>
    </Wrapper>
  );
}
