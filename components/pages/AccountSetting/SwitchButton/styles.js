import styled from 'styled-components';
import { Text } from 'components/global';
import { color } from 'components/utils/color';

export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Label = styled(Text)`
  font-size: 17px;
  width: calc(100% - 100px);
`;

export const SwitchButton = styled.div`
  display:flex;
  align-items: center;
  border-radius: 26px;
  width: 50px;
  background: ${color.cement};
  cursor: pointer;
  padding: 2px;
  transition: all 0.4s ease;
  transition-property: transform, background;
`;

export const Circle = styled.div`
  width: 25px;
  height: 25px;
  background: ${color.offWhite} !important;
  border-radius: 100%;
  transition: all 0.4s ease;
`;
