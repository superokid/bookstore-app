import React from 'react';
import Text from './Text';

interface Props {
  currency: string;
  amount: number;
}

const TextCurrency: React.FC<Props> = ({ currency, amount }) => {
  return (
    <Text>
      {currency} {new Intl.NumberFormat('en-IN', { currency }).format(amount)}.00
    </Text>
  );
};

TextCurrency.defaultProps = {
  currency: 'THB',
  amount: 0,
};

export default TextCurrency;
