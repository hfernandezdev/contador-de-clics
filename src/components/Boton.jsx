import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton(props) {
  const { texto, esBotonDeClick, manejarClic } = props;

  return (
    <button
      className={esBotonDeClick ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClic}
    >
      {texto}
    </button>
  )
}

export default Boton;