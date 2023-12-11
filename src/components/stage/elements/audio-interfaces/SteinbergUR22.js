// src/components/stage/elements/audio-interfaces/SteinbergUR22.js
import React from 'react';
//  import './SteinbergUR22.css'; // Añade estilos según sea necesario

const SteinbergUR22 = ({ id, position }) => {
  return (
    <div
      className="steinberg-ur22"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <p>Steinberg UR22</p>
    </div>
  );
};

export default SteinbergUR22;
