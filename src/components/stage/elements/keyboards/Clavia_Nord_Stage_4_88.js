// src/components/stage/elements/keyboards/Clavia_Nord_Stage_4_88.js
import React from 'react';
import './Clavia_Nord_Stage_4_88.css'; // Añade estilos según sea necesario

const Clavia_Nord_Stage_4_88 = ({ id, position, className }) => {
  const combClass = "clavia_nord_stage_4_88 common-canvas-element " + className;
  return (
    <div
      className={combClass}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <p>Clavia_Nord_Stage_4_88</p>
    </div>
  );
};

export default Clavia_Nord_Stage_4_88;
