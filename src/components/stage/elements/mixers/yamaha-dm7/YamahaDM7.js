// src/components/stage/elements/speakers/KRK_Rokit_5.js
import React from 'react';
import './YamahaDM7.css'; // Añade estilos según sea necesario

const YamahaDM7 = ({ id, position, className, style }) => {
    const combClass = "yamaha-dm7 common-canvas-element " + className;
  return (
    <div
    className={combClass}
    style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        ...style,
      }}
    >
      <p>KRK Rokit 5''</p>
    </div>
  );
};

export default YamahaDM7;
