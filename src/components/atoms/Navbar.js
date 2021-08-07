import React from 'react';

const Navbar = ({ mode, variant, children }) => {
  return (
    <nav class={`navbar navbar-expand-lg navbar-${mode} bg-${variant}`}>
      {children}
    </nav>
  );
};

export default Navbar;
