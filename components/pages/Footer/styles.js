import styled from 'styled-components';
import { color } from 'components/utils/color';
import { Container } from 'components/global/styles';
import { Text } from 'components/global';

export const Wrapper = styled.div`
  background: ${color.black};
  padding: 50px 0 50px 0;
  display: flex !important;
`;

export const Hint = styled.div`
  margin-top: 40px;
  width: 100%;
  color: ${color.white};
  font-size: 17px;
  text-align: center;

  a {
    color: ${color.white};
    margin-left: 4px;
    text-decoration: unset;
    padding-bottom: 1px;
    border-bottom: 1px solid ${color.white};
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1280px) {
    align-items: flex-start;
  }

  @media (max-width: 768px){
    justify-content: space-around;
  }
`;

export const StyledText = styled(Text)`
  width: auto;
  color: ${color.offWhite};
  margin-top: 15px;
  margin-right: 20px;
  cursor: pointer;
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
  width: ${({ position }) => (position === 'first' ? '45%' : '45%')};
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1280px) and (max-width: 1500px){
    width: ${({ position }) => (position === 'first' ? '46%' : '46%')};
  }


  @media (max-width: 1024px){
    width: ${({ position }) => (position === 'first' ? '52%' : '47%')};
  }

  @media (max-width: 768px){
    width: 40%;
  }

  @media (max-width: 440px){
    width: ${({ position }) => (position === 'first' ? '52%' : '47%')};
  }
`;
