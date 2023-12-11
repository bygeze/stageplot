// src/components/stage/elements/microphones/ShureSM58.js
import React from 'react';
import './ShureSM58.css'; // Añade estilos según sea necesario

const ShureSM58 = ({ id, position }) => {
  return (
    <div
      className="shure-sm58 common-canvas-element"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <p>Shure SM58</p>
    </div>
  );
};

export default ShureSM58;
