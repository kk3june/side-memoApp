import React, {useEffect, useState} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Font100 from '../atoms/fonts/font100';
import axios from 'axios';

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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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

const TouchBtn = styled.TouchableOpacity`
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

export default function Content({route, navigation}) {
  const [isLoading, setLoading] = useState(false);
  const [content, setContent] = useState();
  const [memoList, setMemoList] = useState();
  const ix = route.params.ix;

  useEffect(() => {
    axios
      .get(`http://34.226.249.72:8080/api/hospital/${ix}`)
      .then(res => {
        setContent(res.data);
        setLoading(true);
      })
      .catch(err => console.log('up ' + err));
  }, [ix]);

  useEffect(() => {
    const asyncFunc = async () => {
      await axios
        .get(
          `http://34.226.249.72:8080/api/hospital/memo/list?uuid=D4F1DFD222CZZ&hospitalId=${ix}`,
        )
        .then(res => {
          setMemoList(res.data);
        })
        .catch(err => console.log('down ' + err));
    };

    asyncFunc();
  }, [ix]);

  return isLoading ? (
    <Wrapper>
      <Section>
        <Header>
          <ItemHeaderWrapper>
            <ItemHeader>{content.name}</ItemHeader>
            <EditInfo
              onPress={() => {
                navigation.navigate('EditInfo');
              }}>
              <Image source={require('../../assets/images/edit.png')} />
            </EditInfo>
          </ItemHeaderWrapper>
          <ItemBottom>
            <Info>
              <InfoText>{content.manager}</InfoText>
            </Info>
            <Info>
              <InfoText>{content.contact1}</InfoText>
            </Info>
            <Info>
              <InfoText>{content.contact2}</InfoText>
            </Info>
          </ItemBottom>
        </Header>
        <MemoWrapper>
          <MemoTitle>메모</MemoTitle>
          <MemoContent multiline={true}>
            {memoList && memoList[0].memo}
          </MemoContent>
        </MemoWrapper>
        <HistoryHeader>
          <HistoryHeaderText>히스토리</HistoryHeaderText>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditHistory');
            }}>
            <Font100 text="편집" />
          </TouchableOpacity>
        </HistoryHeader>
        {memoList &&
          memoList
            .filter((filterEl, idx) => idx > 0)
            .map(el => {
              return (
                <History key={el.ix}>
                  <HistoryDate>{el.regDt}</HistoryDate>
                  <HistoryContent>{el.memo}</HistoryContent>
                </History>
              );
            })}
      </Section>
      <TouchBtn
        onPress={() => {
          navigation.navigate('AddHistory', {
            name: content.name,
          });
        }}>
        <Image source={require('../../assets/images/pencil.png')} />
      </TouchBtn>
    </Wrapper>
  ) : (
    <View />
  );
}
