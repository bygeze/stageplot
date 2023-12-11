// src/components/stage/elements/microphones/ShureSM58.js
import React from 'react';
import './DBX_231.css'; // Añade estilos según sea necesario

const DBX_231 = ({ id, position }) => {
  return (
    <div
      className="dbx_231 common-canvas-element"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <p>DBX_231</p>
    </div>
  );
};

export default DBX_231;
