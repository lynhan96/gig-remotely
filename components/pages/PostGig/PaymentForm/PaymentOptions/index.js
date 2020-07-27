import React, {
  useState, useEffect,
} from 'react';
import {
  CheckBox, Text,
} from 'components/global';

import {
  Wrapper,
  SelectWrapper,
  PaymentItem,
  CardLabel,
  Image,
  Title,
  CardText,
} from './styles';

const Label = ({ text, type }) => (
  <CardLabel>
    <Image src={`/images/icon/${type}.svg`} />
    <CardText>{text}</CardText>
  </CardLabel>
);

const PaymentOptions = ({ paymentMethod, paymentOptionRef, buttonRef }) => {
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    if (!selectedOption) {
      paymentMethod.filter((i) => i.default_source && setSelectedOption(i.id));
    }
  }, [paymentMethod]);

  const onSelectOption = (value) => setSelectedOption(value.name);

  useEffect(() => {
    paymentOptionRef.current = paymentMethod.filter((i) => i.id === selectedOption);
    buttonRef.current.available();
  }, [selectedOption]);

  return (
    <Wrapper>
      <Title>Choose Payment option</Title>
      <SelectWrapper>
        {
          paymentMethod.map(({ id, card }) => (
            <PaymentItem key={id}>
              <CheckBox
                name={id}
                label={(
                  <Label
                    text={`${Text.toTitleCase(card.brand)} ending ${card.last4}`}
                    type={card.brand}
                  />
                )}
                onChange={onSelectOption}
                className='custom-checkbox'
                defaultValue={selectedOption === id}
              />
            </PaymentItem>
          ))
        }
      </SelectWrapper>
    </Wrapper>
  );
};

export default PaymentOptions;
