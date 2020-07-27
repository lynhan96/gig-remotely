import styled from 'styled-components';
import { Text } from 'components/global';
import { color } from 'components/utils/color';

export const StyledText = styled(Text)`
  margin: 10px 0 40px 0;

  @media (width: 768px) {
    font-size: ${Text.fontSize('md')}
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px 0 200px 0;

  @media (max-width: 1024px) {
    width: calc(100% - 40px);
    padding: 0 20px;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 0;
    margin: 80px 0;
  }
`;

export const Title = styled(Text)`
  font-size: 60px;
  margin-bottom: 50px;
  font-weight: bold;

  @media (max-width: 767px) {
    font-size: 40px;
    margin-bottom: 30px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 30px);
  margin-top: 30px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 30px);

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 50px;
  }
`;

export const Label = styled(Text)`
  font-size: 17px;
  font-weight: bold;

  span {
    margin-left: 10px;
    cursor: pointer;
    font-size: 15px;
    color: ${color.cement};
    text-decoration: underline;
    font-weight: normal;
  }
`;

export const HeadTitle = styled(Text)`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  span {
    margin-left: 20px;
    cursor: pointer;
    font-size: 15px;
    color: ${color.cement};
    text-decoration: underline;
  }
`;
export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  .custom-checkbox {
    width: 270px;

    span {
      top: 2px !important;
    }

    input {
      &:checked ~ span {
        border: 1px solid ${color.aquaMarine};
        background: ${color.aquaMarine};
      }
    }
  }
`;

export const PaymentItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
`;

export const Selected = styled(Text)`
  font-size: 17px;
  color: ${color.cement};
  margin-right: 20px;
  width: 75px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const CardLabel = styled(Text)`
  display: flex;
  align-items: center;
`;

export const CardText = styled(Text)`
  display: flex;
  align-items: center;
  font-size: 17px;

  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 30px;
  object-fit: contain;
  margin-right: 10px;
  margin-left: 10px;
`;

export const RemoveLink = styled(Text)`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: ${color.cement};
  text-decoration: underline;
  width: auto;
  margin-left: 15px;
  cursor: pointer;
`;

export const Card = styled(Text)`
  box-shadow: 0 3px 42px 0 rgba(0, 0, 0, 0.05);
  background-color: ${color.offWhite};
  padding: 30px;


  @media (max-width: 767px) {
    padding: 20px 15px;
  }
`;

export const CardTitle = styled(Text)`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    font-size: 26px;
  }
`;

export const FieldInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  position: relative;
`;

export const Input = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  background: ${color.eggshell};
  height: 50px;
  border-radius: 26px;
`;

export const FieldLabel = styled(Text)`
  font-size: 17px;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const FieldGroupInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  position: relative;

  @media (max-width: 767px) {
    flex-flow: wrap row;
    justify-content: center;
  }

  ${FieldInput} {
    width: calc(30% - 15px);
    margin-right: 15px;


    @media (max-width: 767px) {
      width: calc(50% - 15px);

      &:last-child {
        width: 50%;
      }
    }
  }

  .button {
    position: absolute;
    bottom: 0;
    right: 0;

    @media (max-width: 767px) {
      position: relative;
      margin-top: 20px;
    }
  }
`;

export const Error = styled(Text)`
  color: ${color.red};
  font-size: 15px;
  margin-top: 10px;
  margin-left: 20px;
`;
