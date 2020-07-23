import styled, { css } from 'styled-components';
import { Text } from 'components/global';
import { color } from 'components/utils/color';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const Label = styled(Text)`
  width: 100%;
`;

export const GroupButton = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
`;

export const Item = styled.div`
  margin-top: 10px;
  cursor: pointer;
  outline: none;
  height: 48px;
  border: 1px solid ${color.black};
  color: ${color.black};
  font-size: 17px;
  padding: 0 20px;
  background: ${color.offWhite};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  border-radius: 26px;
  margin-right: 20px;
  line-height: 1.24;

  ${({ active }) => active && css`
    background: ${color.black};
    color: ${color.offWhite};
    border: 1px solid ${color.black};
  `}

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background: ${color.black};
    color: ${color.offWhite};
    border: 1px solid ${color.black};
  }

  @media (max-width: 767px){
    font-size: 15px;
    height: 40px;
    margin-right: 10px;
    padding: 0 15px;
  }
`;
