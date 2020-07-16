import styled from 'styled-components';
import Modal from 'react-modal';
import { color } from 'components/utils/color';

export const StyledModal = styled(Modal)`
  outline: none;
  min-width: 400px;
  background: ${color.offWhite};
  padding: 30px 40px;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: none !important;
  position: relative;

  &:focus {
    border: none;
  }

  @media(max-width: 768px) {
    min-width: 300px;
  }
`;

export const CloseIcon = styled.img`
  right: 20px;
  top: 20px;
  cursor: pointer;
  width: 15px;
  height: 15px;
  position: absolute;
`;
