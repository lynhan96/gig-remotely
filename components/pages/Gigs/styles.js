import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  margin-top: 50px;
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;

  ${({ loading }) => loading === 'true' && css`
    height: 500px;
    margin-bottom: 0;
  `}
`;
