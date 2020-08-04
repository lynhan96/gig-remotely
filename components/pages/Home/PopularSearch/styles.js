import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;

export const TagGroup = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  width: 620px;
  margin-top: 20px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 100px;
  }
`;
