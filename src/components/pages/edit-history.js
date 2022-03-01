import React, {useState} from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import styled from 'styled-components';
import Mark from '../modules/mark';

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
`;

const HistoryHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 14px 10px;
  border: 1px solid #ffcb7d;
`;

const HistoryHeaderText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  line-height: 23px;
  color: #333;
`;

const History = styled.View`
  // padding: 14px 10px;
  // border-bottom-width: 1px;
  // border-bottom-color: #ffcb7d;
  padding: 0 20px;
`;

const HistoryDate = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #6d6d6d;
`;

const HistoryContent = styled.Text`
  font-size: 16px;
  line-height: 23px;
  color: #333333;
`;

const DeleteText = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #ffcb7d;
`;

const SelectBox = styled.View`
  display: flex;
  flex-direction: row;
  padding: 14px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #ffcb7d;
`;

const SelectBoxText = styled.Text`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  padding: 2px 20px;
  color: #333;
`;

const EditHistoryItem = styled.View`
  display: flex;
  flex-direction: row;
  padding: 14px 20px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #ffcb7d;
`;

export default function EditHistory({navigation}) {
  return (
    <Wrapper>
      <Section>
        <HistoryHeader>
          <View>
            <HistoryHeaderText>히스토리</HistoryHeaderText>
          </View>
          <View>
            <TouchableOpacity>
              <DeleteText>삭제</DeleteText>
            </TouchableOpacity>
          </View>
        </HistoryHeader>
        <SelectBox>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/checkbox_circle.png')}
            />
          </TouchableOpacity>
          <SelectBoxText>전체선택</SelectBoxText>
        </SelectBox>
        <EditHistoryItem>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/checkbox_circle.png')}
            />
          </TouchableOpacity>
          <History>
            <HistoryDate>2022.02.03</HistoryDate>
            <HistoryContent>
              주며, 뭇 위하여서, 우리는 가지에 끓는 무엇이 가는 이 것이다.
              얼음이 방황하여도, 황금시대의 얼음에
            </HistoryContent>
          </History>
        </EditHistoryItem>
        <EditHistoryItem>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/checkbox_circle.png')}
            />
          </TouchableOpacity>
          <History>
            <HistoryDate>2022.02.03</HistoryDate>
            <HistoryContent>
              이상의 끝에 그들에게 바이며, 청춘의 이것이다. 대고, 맺어, 보배를
              인생을 공자는 인간의
            </HistoryContent>
          </History>
        </EditHistoryItem>
      </Section>
      <Mark />
    </Wrapper>
  );
}
