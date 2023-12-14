// src/components/stage/elements/microphones/ShureSM58.js
import React from 'react';
import './ShureSM58.css'; // Añade estilos según sea necesario

const ShureSM58 = ({ id, position, className, style }) => {
  const combClass = "shure-sm58 common-canvas-element " + className;
  return (
    <div
      className={combClass}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        ...style,
      }}
    >
      <p>Shure SM58</p>
    </div>
  );
};

export default ShureSM58;
