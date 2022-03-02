import React, {useState} from 'react';
import styled from 'styled-components';
import Font50 from '../atoms/fonts/font50';
import CancleBtn from '../atoms/buttons/cancle-btn';
import DeleteBtn from '../atoms/buttons/delete-btn';
import ConfirmBtn from '../atoms/buttons/confirm-btn';

const Wrapper = styled.View`
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  margin: auto;
  padding: 10px 14px;
  width: 240px;
  height: 240px;
  background: #ffffff;
  border: 1px solid #ffcb7d;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const MarkImg = styled.Image`
  margin: 20px 0 30px 0;
`;

const MarkTextBold = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #ffcb7d;
  padding-bottom: 8px;
`;

const BtnWrapper = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;
const Space = styled.View`
  width: 100%;
  height: 37px; s
`;

export default function Mark(props) {
  const [confirmDel, setConfirmDel] = useState(false);

  const handleConfirmDel = () => {
    setConfirmDel(true);
  };

  return (
    <Wrapper>
      <MarkImg source={require('../../assets/images/mark.png')} />
      {confirmDel !== true ? (
        <>
          <MarkTextBold>선택된 내용을 삭제합니다.</MarkTextBold>
          <Font50 text="삭제된 내용은 복구할 수 없습니다." />
        </>
      ) : (
        <>
          <MarkTextBold>삭제 되었습니다.</MarkTextBold>
          <Space />
        </>
      )}

      <BtnWrapper>
        {confirmDel !== true ? (
          <>
            <CancleBtn callback={props} />
            <DeleteBtn callback={handleConfirmDel} />
          </>
        ) : (
          <>
            <ConfirmBtn callback={props} />
          </>
        )}
      </BtnWrapper>
    </Wrapper>
  );
}
