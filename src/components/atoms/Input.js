import React from 'react';

const Input = ({ className, name, type, children }) => {
  return (
    <input className={className} name={name} type={type}>
      {children}
    </input>
  );
};

export default Input;
