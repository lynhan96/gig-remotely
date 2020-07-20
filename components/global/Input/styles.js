import styled from 'styled-components';
import { color } from 'components/utils/color';

export const StyledInput = styled.input`
  font-family: 'Proxima Nova', sans-serif;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 17px;
  width: calc(100% - 40px);
  ${({ size }) => `height: ${size}px;`}
  outline: none;
  border-radius: 30px;
  border: solid 1px ${({ background }) => (background || color.black)};
  background: ${({ background }) => (background || color.offWhite)};
  color: ${color.black};
  position: relative;

  ::placeholder {
    color: ${color.cement};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${color.cement};
  }

  ::-ms-input-placeholder {
    color: ${color.cement};
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ShowPasswordText = styled.span`
  position: absolute;
  right: 10px;
  font-size: 17px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const InputWrapper = styled.span`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
`;

export const StyledTextArea = styled.textarea`
  font-family: 'Proxima Nova', sans-serif;
  display: flex;
  align-items: center;
  padding: 20px;
  font-size: 17px;
  width: calc(100% - 40px);
  min-height: 400px;
  outline: none;
  border-radius: 10px;
  border: solid 1px ${({ background }) => (background || color.black)};
  background: ${({ background }) => (background || color.offWhite)};
  color: ${color.black};
  position: relative;

  ::placeholder {
    color: ${color.cement};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${color.cement};
  }

  ::-ms-input-placeholder {
    color: ${color.cement};
  }

  @media (max-width: 1024px) {
    min-height: 200px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;