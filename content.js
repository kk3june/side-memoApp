import React from 'react';
import {Image, Text} from 'react-native';
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
`;

const Header = styled.View`
  width: 100%;
  height: 84px;
  padding: 24px 12px 10px;
`;

const ItemHeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ItemHeader = styled.Text`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  color: #333333;
`;

const ItemBottom = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const Info = styled.View`
  padding-right: 14px;
`;

const InfoText = styled.Text`
  color: #6d6d6d;
`;

const EditInfo = styled.TouchableOpacity`
  padding-right: 10px;
`;

const MemoWrapper = styled.View`
  width: auto;
  height: 158px;
  margin: 12px 10px;
`;
const MemoTitle = styled.Text`
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #333;
`;
const MemoContent = styled.TextInput`
  width: 100%;
  height: 118px;
  padding: 10px;
  color: #333333;
  flex-shrink: 1;
  background-color: rgb(255, 239, 216);
  border-radius: 5px;
  overflow: hidden;
`;

const HistoryHeader = styled.View`
  padding: 14px 10px;
  border: 1px solid #ffcb7d;
`;

const History = styled.View`
  padding: 14px 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ffcb7d;
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

export default function Content() {
  return (
    <Wrapper>
      <Section>
        <Header>
          <ItemHeaderWrapper>
            <ItemHeader>고아랑 정형외과</ItemHeader>
            <EditInfo>
              <Image source={require('./src/assets/images/edit.png')} />
            </EditInfo>
          </ItemHeaderWrapper>
          <ItemBottom>
            <Info>
              <InfoText>고아랑</InfoText>
            </Info>
            <Info>
              <InfoText>010-1234-1234</InfoText>
            </Info>
            <Info>
              <InfoText>02-942-2314</InfoText>
            </Info>
          </ItemBottom>
        </Header>
        <MemoWrapper>
          <MemoTitle>메모</MemoTitle>
          <MemoContent
            value="원장 생일 : 02/10, 와이프생일 : 05/11 결혼기념일 : 11/10 딸 22년에
              중학교 입학"
            multiline={true}
          />
        </MemoWrapper>
        <HistoryHeader>
          <Text>히스토리</Text>
        </HistoryHeader>
        <History>
          <HistoryDate>2022.02.03</HistoryDate>
          <HistoryContent>
            주며, 뭇 위하여서, 우리는 가지에 끓는 무엇이 가는 이 것이다. 얼음이
            방황하여도, 황금시대의 얼음에
          </HistoryContent>
        </History>
      </Section>
      <Button>
        <Image source={require('./src/assets/images/pencil.png')} />
      </Button>
    </Wrapper>
  );
}
