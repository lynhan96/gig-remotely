import styled from 'styled-components';
import { Text, Modal } from 'components/global';
import { color } from 'components/utils/color';

export const StyledModal = styled(Modal)`
  width: ${({ applied }) => (applied ? '500px' : '750px')};
  padding: ${({ applied }) => (applied ? '50px 30px' : '50px 50px')};
  &::-webkit-scrollbar
  {
    width: 5px;
    background-color: #F5F5F5;
  }

  @media (max-width: 1024px) {
    width: ${({ applied }) => (applied ? '500px' : 'calc(100% - 200px)')};
    padding: ${({ applied }) => (applied ? '50px 30px' : '50px 50px')};
  }

  @media (max-width: 768px) {
    width: calc(100% - 40px);
    padding: 40px 15px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
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
  width: calc(100% - 33px);

  @media (max-width: 768px) {
    font-size: 13px;
  }
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
    height: 200%;
    left: -10px;
  }
`;

export const Alert = styled.div`
  font-size: 15px;
  color: ${color.red};
  margin-top: 5px;
  width: 100%;
  text-align: left;
  padding-left: 30px;
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
  width: calc(100% - 33px);

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const MessageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MessageImage = styled.img`
  width: 88%;
  object-fit: contain;
  margin-top: 50px;
`;

export const MessageTitle = styled(Text)`
  margin-top: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 21px;
  }
`;

export const MessageText = styled(Text)`
  width: 355px;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 14px;
    width: 295px;
  }
`;
