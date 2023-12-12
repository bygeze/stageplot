// src/components/stage/elements/microphones/ShureSM58.js
import React from 'react';
import './DBX_231.css'; // Añade estilos según sea necesario

const DBX_231 = ({ id, position, className }) => {
  const combClass = "dbx_231 common-canvas-element " + className;
  return (
    <div

      className={combClass}
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
