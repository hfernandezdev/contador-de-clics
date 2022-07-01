import React from 'react';
import '../hojas-de-estilo/Contador.css';

function Contador(props) {
  const { numClics } = props;

  return (
    <div className='contador'>
      {numClics}
    </div>
  )
}

export default Contador;