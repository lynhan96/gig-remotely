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

export const MessageMessage = styled.div`
  width: 100%;
  text-align: center;
  object-fit: contain;
  margin-top: 20px;

  strong {
    margin-left: 5px;
  }
`;

export const MessageTitle = styled(Text)`
  width: 400px;
  margin-top: 10px;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 21px;
  }
`;
