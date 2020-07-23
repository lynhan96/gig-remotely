import styled from 'styled-components';
import { Text, Modal } from 'components/global';

export const StyledModal = styled(Modal)`
  width: 500px;
  padding: 50px 30px;

  @media (max-width: 768px) {
    width: calc(100% - 40px);
    padding: 40px 15px;
  }
`;

export const MessageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MessageImage = styled.img`
  width: 125px;
  object-fit: contain;
  margin-top: 20px;
`;

export const MessageTitle = styled(Text)`
  margin-top: 30px;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 21px;
  }
`;
