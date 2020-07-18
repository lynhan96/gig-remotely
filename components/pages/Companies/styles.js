import styled, { css } from 'styled-components';
import { Text } from 'components/global';
import { color } from 'components/utils/color';

export const ListWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-flow: wrap row;
  position: relative;
  justify-content: space-around;
  align-items: center;
  margin: 40px 0;

  @media(max-width: 1024px) {
    width: 100%;
  }

  @media(max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  ${({ loading }) => loading === 'true' && css`
    height: 70vh;
    padding-bottom: 70px;
    margin-bottom: 0;
  `}
`;

export const Item = styled.div`
  cursor: pointer;
  width: 28%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media(max-width: 1024px) {
    width: 40%;
  }

  @media(max-width: 768px) {
    width: 45%;
    height: 230px;
    margin-top: 20px;
  }

  @media(max-width: 375px) {
    height: 200px;
  }
`;

export const Image = styled.div`
  background-image: url(${({ src }) => src});
  width: 200px;
  height: 200px;
  background-color: ${color.eggshell};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 2px;

  @media(max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media(max-width: 375px) {
    width: 130px;
    height: 130px;
  }
`;

export const Name = styled(Text)`
  margin-top: 15px;
  text-align: center;
  @media(max-width: 768px) {
    font-size: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const Location = styled(Text)`
  margin-top: 8px;
  text-align: center;
  color: ${color.cement};
  @media(max-width: 768px) {
    font-size: 13px;
  }
`;
