import styled from 'styled-components';
import { Text, Modal } from 'components/global';
import { color } from 'components/utils/color';

export const StyledModal = styled(Modal)`
  width: 750px;
  padding: 50px 50px;

  &::-webkit-scrollbar
  {
    width: 5px;
    background-color: #F5F5F5;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LocaleWrapper = styled.div`
  display: flex;
  margin: 30px 0 10px 0;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 25px;
  flex-direction: column;
  align-items: flex-start;
`;

export const ResumeInputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
  flex-direction: column;
  width: 100%;
`;

export const Resume = styled(Text)`
  margin-top: 5px;
  padding-left: 33px;
  color: ${color.cement};
  text-align: left;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  input {
    cursor: pointer;
    position: absolute;
    top: -22px;
    height: 140%;
    left: -10px;
  }
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 8px;
`;

export const CloseIcon = styled.img`
  width: 11px;
  height: 11px;
  margin-left: 10px;
  cursor: pointer;
  margin-top: 2px;
`;

export const Label = styled(Text)`
`;

export const FileName = styled(Text)`
  display: flex;
  align-items: center;
  margin-top: 5px;
  padding-left: 33px;
  color: ${color.cement};
  text-align: left;
`;
