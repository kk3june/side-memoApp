import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  background-color: #ffcb7d;
`;

const ListSection = styled.View`
  position: absolute;
  top: 59px;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;
const Spell = styled.View`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ffcb7d;
  padding: 14px 8px;
`;

const SpellText = styled.Text`
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
  background-color: #ffcb7d;
`;

const ListItem = styled.TouchableOpacity`
  height: 65px;
  width: 100%;
  padding: 12px 10px;
  border: 1px solid #ffcb7d;
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
  justify-content: space-between;
`;

const Right = styled.View``;

const Left = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Info = styled.View`
  padding-right: 14px;
`;

const InfoText = styled.Text`
  color: #6d6d6d;
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

export default function List({navigation}) {
  const [list, setList] = useState();
  useEffect(() => {
    axios
      .get('http://34.226.249.72:8080/api/hospital/list?uuid=D4F1DFD222CZZ')
      .then(res => setList(res.data));
  }, []);

  return (
    <Wrapper>
      <ListSection>
        <Spell>
          <SpellText>ㄱ</SpellText>
        </Spell>
        {list &&
          list.map(item => {
            return (
              <ListItem
                key={item.ix}
                onPress={() => navigation.navigate('Content', {ix: item.ix})}>
                <ItemHeader>{item.name}</ItemHeader>
                <ItemBottom>
                  <Left>
                    <Info>
                      <InfoText>{item.manager}</InfoText>
                    </Info>
                    <Info>
                      <InfoText>{item.contact1}</InfoText>
                    </Info>
                    <Info>
                      <InfoText>{item.contact2}</InfoText>
                    </Info>
                  </Left>
                  <Right>
                    <InfoText>{item.regDt}</InfoText>
                  </Right>
                </ItemBottom>
              </ListItem>
            );
          })}
      </ListSection>
      <Button
        onPress={() => {
          navigation.navigate('AddInfo');
        }}>
        <Image source={require('../../assets/images/plus.png')} />
      </Button>
    </Wrapper>
  );
}
