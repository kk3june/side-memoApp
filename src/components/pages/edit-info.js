import axios from 'axios';
import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
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

export default function AddInfo() {
  const [info, setInfo] = useState({
    uuid: 'D4F1DFD222CZK',
    name: '',
    manager: '',
    contact1: '',
    contact2: '',
    memo: '',
  });

  const handleInput = (name, value) => {
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log(info);
    // axios
    //   .put('http://34.226.249.72:8080/api/hospital', {
    //     info,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  return (
    <Wrapper>
      <Section>
        <AddHeader>
          업체명 <Highlight>*</Highlight>
        </AddHeader>
        <AddInput
          placeholder="영업하는 업체명을 입력하세요."
          name="name"
          onChangeText={text => handleInput('name', text)}
        />
        <AddHeader>
          담당자명 <Highlight>*</Highlight>
        </AddHeader>
        <AddInput
          placeholder="담당자 또는 점주의 이름을 입력하세요."
          name="manager"
          onChangeText={text => handleInput('manager', text)}
        />
        <AddHeader>
          연락처 1 <Highlight>*</Highlight>
        </AddHeader>
        <AddInput
          placeholder="담당자 또는 점주의 연락처를 입력하세요."
          name="contact1"
          onChangeText={text => handleInput('contact1', text)}
        />
        <AddHeader>
          연락처 2 <Highlight>*</Highlight>
        </AddHeader>
        <AddInput
          placeholder="담당자 또는 점주의 연락처를 입력하세요."
          name="contact2"
          onChangeText={text => handleInput('contact2', text)}
        />
        <AddHeader>
          메모 <Highlight>*</Highlight>
        </AddHeader>
        <AddContent
          placeholder="자유롭게 메모를 입력하세요."
          name="memo"
          onChangeText={text => handleInput('memo', text)}
        />
      </Section>
      <SaveBtn onPress={() => handleSave}>
        <SaveBtnTitle>저장</SaveBtnTitle>
      </SaveBtn>
    </Wrapper>
  );
}
