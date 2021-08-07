import React from 'react';
import H1 from '../atoms/H1';
import P from '../atoms/P';
import Small from '../atoms/Small';

const Typography = ({ component, children }) => {
  switch (component) {
    case 'h1':
      return <H1>{children}</H1>;
    case 'p':
      return <P>{children}</P>;
    case 'small':
      return <Small>{children}</Small>;
    default:
      return <P>{children}</P>;
  }
};

export default Typography;
