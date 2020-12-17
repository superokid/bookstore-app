import React from 'react';
import Text from './Text';

interface Props {
  currency: string;
  amount: number;
}

const TextCurrency: React.FC<Props> = ({ currency, amount }) => {
  return (
    <Text>
      {currency} {amount}
    </Text>
  );
};

export default TextCurrency;
