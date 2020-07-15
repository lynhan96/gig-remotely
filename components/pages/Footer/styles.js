import styled from 'styled-components';
import { color } from 'components/utils/color';
import { Container } from 'components/global/styles';
import Text from 'components/global/Text';

export const Wrapper = styled.div`
  background: ${color.black};
  padding: 40px 0 100px 0;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1280px) {
    align-items: flex-start;
  }
`;

export const StyledText = styled(Text)`
  width: auto;
  color: ${color.offWhite};
  margin-top: 15px;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  @media (min-width: 1280px) and (max-width: 1500px){
    margin-right: 0;
  }

  @media (max-width: 1280px) {
    width: 100%;
    margin-top: 20px;
    margin-right: 0;
  }
`;

export const Group = styled.div`
  width: 48%;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1280px) and (max-width: 1500px){
    width: calc(50% - 10px);
  }
/*
  @media (max-width: 1280px) {
    width: 48%;
  }*/
`;
