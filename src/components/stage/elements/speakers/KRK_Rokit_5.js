// src/components/stage/elements/speakers/KRK_Rokit_5.js
import React from 'react';
//import './KRK_Rokit_5.css'; // Añade estilos según sea necesario

const KRKRokit5 = ({ id, position }) => {
  return (
    <div
      className="krk-rokit-5"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <p>KRK Rokit 5''</p>
    </div>
  );
};

export default KRKRokit5;
