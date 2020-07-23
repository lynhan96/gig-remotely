import styled, { css } from 'styled-components';
import { Text } from 'components/global';
import { color } from 'components/utils/color';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 140px;

  @media(max-width: 768px) {
    margin-top: 50px;
    margin-bottom: 70px;
  }
`;

export const Title = styled(Text)`
  width: 100%;
  font-size: 60px;
  margin-bottom: 50px;

  @media(max-width: 768px) {
    font-size: 45px;
  }
`;

export const Tabs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  position: relative;
`;

export const TabItem = styled(Text)`
  width: auto;
  cursor: pointer;
  line-height: 1.2;
  margin-right: 40px;
  transition: all 0.1s ease;
  position: relative;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};

  &:before {
    width: ${({ active }) => (active ? 'calc(100% - 32px)' : 0)};
    transition: all 0.4s ease;
    content: '';
    height: 2px;
    position: absolute;
    bottom: -5px;
    background: linear-gradient(to right, ${color.aquaMarine},  ${color.pumpkinOrange});
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    font-weight: bold;

    &:before {
      width: calc(100% - 32px);
    }
  }

  @media(max-width: 768px) {
    white-space: pre;
    margin-right: 20px;
    font-size: 15px;
    width: auto;

    &:before {
      width: ${({ active }) => (active ? 'calc(100% - 23px)' : 0)};
    }

    &:hover {
      &:before {
        width: calc(100% - 23px);
      }
    }
  }
`;

export const TabsItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: auto;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  @media(max-width: 767px) {
    width: calc(100% - 40px);
    margin-right: 10px;
  }
`;

export const TabScrollAble = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 10px;

  @media(max-width: 767px) {
    width: 150%;
    padding-bottom: 10px;
  }
`;

export const TabContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  position: relative;

  ${({ loading }) => loading === 'true' && css`
    justify-content: center;
    align-items: center;
    height: 50vh;
    padding-bottom: 70px;
    margin-bottom: 0;
  `}
`;

export const TabContent = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  position: absolute;
  opacity: 0;
  transition: all 0.3s ease;

  ${({ open }) => open && css`
    opacity: 1;
    position: relative;
  `}

  @media(min-width: 768px) and (max-width: 1026px) {
    justify-content: space-around;
  }
`;

export const EmptyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const EmptyImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;


  @media(max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;
