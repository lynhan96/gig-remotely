import styled from 'styled-components';
import { Text, Button } from 'components/global';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 120px 0;

  @media (max-width: 767px) {
    margin: 70px 0;
  }

`;

export const Title = styled(Text)`
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 25px;
    margin-bottom: 15px;
  }
`;

export const FormWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (min-width: 1280px) and (max-width: 1500px){
    width: 70%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledButton = styled(Button)`
  margin-left: 15px;

  @media (max-width: 767px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;
