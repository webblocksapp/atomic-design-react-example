import React, { useEffect, useState } from 'react';

const Button = ({ variant, className, style, onClick, children }) => {
  const [buttonClass, setButtonClass] = useState();

  const createButtonClass = () => {
    if (variant) {
      setButtonClass(`btn btn-${variant}`);
    } else {
      setButtonClass('btn btn-primary');
    }
  };

  useEffect(() => {
    createButtonClass();
  }, [variant]);

  return (
    <button
      className={className || buttonClass}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
