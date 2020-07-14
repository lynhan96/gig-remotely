import styled, { keyframes } from 'styled-components';

const moveDown = keyframes`
  0% { margin-top: 4px }
  25% { margin-top: 8px; }
  75% { margin-top: 12px; }
  100% { margin-top: 15px; }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Head = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: flex-end;
  width: calc(100% - 300px);
  padding: 0 150px;
  margin-top: 130px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(55% - 15px);
  margin-bottom: 35px;
`;

export const Image = styled.img`
  width: calc(45% - 15px);
  height: 350px;
  object-fit: contain;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 40px;
  margin-top: 130px;
  margin: 100px 0;
`;

export const Icon = styled.img`
  width: 25px;
  object-fit: contain;
  -webkit-animation: ${moveDown} 0.8s linear 0.4s infinite alternate;
  animation: ${moveDown} 0.8s linear 0.4s infinite alternate;
`;

export default Wrapper;
