import React from 'react';
import spinner from '../../img/spinner.gif';

const Sponner = () => {
  return (
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading'
    />
  );
};

export default Sponner;
