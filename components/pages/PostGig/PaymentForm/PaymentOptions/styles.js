import styled from 'styled-components';
import { Text } from 'components/global';
import { color } from 'components/utils/color';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
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

export const Title = styled(Text)`
  font-size: 17px;
  font-weight: bold;
  color: ${color.offWhite};
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .custom-checkbox {
    width: 270px;

    span {
      top: 2px !important;
      border: 1px solid ${color.offWhite};
    }

    input {
      &:checked ~ span:after {
        opacity: 1;
        background: ${color.black};
      }

      &:checked ~ span:before {
        opacity: 1;
        background: ${color.black};
      }

      &:checked ~ span {
        background: ${color.offWhite};
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

export const CardLabel = styled(Text)`
  display: flex;
  align-items: center;
`;

export const CardText = styled(Text)`
  display: flex;
  align-items: center;
  font-size: 17px;
  color: ${color.offWhite};

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
  border-radius: 5px;
  border: solid 1px ${color.offWhite};
`;
