// src/components/stage/Stage.js
import React, { useState } from 'react';
import ElementsBar from './ElementsBar';
import Canvas from './Canvas';

const Stage = () => {
  // elements in canvas
  const [stageElements, setStageElements] = useState([]); // replace with load from localStorage
  const [idCount, setIdCount] = useState(0);

  const handleAddElementToCanvas = (elementType) => {
    // generate id
    const id = idCount;
    setIdCount(idCount + 1);

    // create elementw
    const newElement = { id, type: elementType, position: { x: 100, y: 100 } }; // Cambia las coordenadas según sea necesario

    // add element to array;
    setStageElements([...stageElements, newElement]);
  };

  // updates array of stage elements when an element ends its dragging.
  const handleElementMove = (id, newPosition) => {
    const updatedElements = stageElements.map((element) =>
      element.id == id ? { ...element, position: newPosition } : element
    );

    setStageElements(updatedElements);
  };

  return (
    <div>
      <ElementsBar addElementToCanvas={handleAddElementToCanvas} />
      <Canvas elements={stageElements} onElementMove={handleElementMove} />
    </div>
  );
};

export default Stage;
