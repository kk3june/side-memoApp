import axios from 'axios';
import React, {useState} from 'react';
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

export default function AddHistory({route}) {
  const [paramName, setParamName] = useState(route.params);
  const [data, setData] = useState({
    uuid: 'D4F1DFD222CZZ',
    hospitalId: 1,
    memo: '',
  });

  const onChange = (name, text) => {
    setData({
      ...data,
      [name]: text,
    });
  };

  const handleSave = () => {
    axios
      .put('http://34.226.249.72/api/hospital/memo', data)
      .then(res => console.log('success', res))
      .catch(err => console.log('get error', err));
  };

  // 날짜 format 2021-03-11
  function leftPad(value) {
    if (value >= 10) {
      return value;
    }
    return `0${value}`;
  }
  function toStringByFormatting(source, delimiter = '-') {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());
    return [year, month, day].join(delimiter);
  }

  const now = toStringByFormatting(new Date());

  return (
    <Wrapper>
      <WrapperHeader>히스토리 입력</WrapperHeader>
      <Section>
        <AddHeader>
          업체명 <Highlight>*</Highlight>
        </AddHeader>
        <AddInput>{paramName.name}</AddInput>
        <AddHeader>
          작성일 <Highlight>*</Highlight>
        </AddHeader>
        <AddInput value={now} />
        <AddHeader>
          내용 <Highlight>*</Highlight>
        </AddHeader>
        <AddContent onChangeText={text => onChange('memo', text)} />
      </Section>
      <SaveBtn onPress={() => handleSave()}>
        <SaveBtnTitle>저장</SaveBtnTitle>
      </SaveBtn>
    </Wrapper>
  );
}
