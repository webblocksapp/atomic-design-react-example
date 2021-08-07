import React from 'react';
import Div from '../atoms/Div';
import Label from '../atoms/Label';
import Input from '../atoms/Input';
import Small from '../atoms/Small';

const TextInput = ({ label, name, hint }) => {
  return (
    <Div className="form-group">
      <Label>{label}</Label>
      <Input type="email" name={name} className="form-control" />
      {hint ? <Small className="form-text text-muted">{hint}</Small> : <></>}
    </Div>
  );
};

export default TextInput;
