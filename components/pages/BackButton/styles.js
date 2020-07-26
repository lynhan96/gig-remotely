import styled from 'styled-components';

export const Image = styled.img`
  width: 35px;
  position: absolute;
  left: -7%;
  top: 12px;
  cursor: pointer;

  @media (max-width: 1700px) {
    left: -5%;
  }

  @media (max-width: 1560px) {
    top: -50px;
    left: 0;
  }

  @media (max-width: 1280px) {
    top: 12px;
    left: -7%;
  }

  @media (max-width: 1150px) {
    top: -50px;
    left: 0;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export default Image;
