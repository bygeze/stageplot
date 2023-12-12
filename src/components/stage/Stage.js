// src/components/stage/Stage.js
import React, { useState } from 'react';
import ElementsBar from './ElementsBar';
import Canvas from './Canvas';
import InformationSideBar from './InformationSideBar';
import {LS_save, LS_load} from './../../LocalStorageHandler'

const STAGE_ELEMENTS = 'stage-elements';
const ELEMENTS_ID_COUNTER = 'stage-elements-id-counter';

const Stage = () => {
  
  // elements in canvas
  const [stageElements, setStageElements] = useState(LS_load(STAGE_ELEMENTS) || []); // replace with load from localStorage
  const [idCount, setIdCount] = useState(parseInt(LS_load(ELEMENTS_ID_COUNTER)));
  const [selectedElementId, setSelectedElementId] = useState(3);

  const handleAddElementToCanvas = (elementType) => {
    // generate id
    const id = idCount + 1;
    setIdCount(id);
    LS_save(id, ELEMENTS_ID_COUNTER);

    // create elementw
    const newElement = { id, type: elementType, position: { x: 100, y: 100 } }; // Cambia las coordenadas según sea necesario

    // add element to array;
    setStageElements([...stageElements, newElement]);
    LS_save(stageElements, STAGE_ELEMENTS);
  };

  // updates array of stage elements when an element ends its dragging.
  const handleElementMove = (id, newPosition) => {
    const updatedElements = stageElements.map((element) =>
      element.id == id ? { ...element, position: newPosition } : element
    );

    setStageElements(updatedElements);
    LS_save(updatedElements, STAGE_ELEMENTS);
  };

  const handleElementClick = (id) => {
    setSelectedElementId(id);
  }

  return (
    <div>
      <ElementsBar addElementToCanvas={handleAddElementToCanvas} />
      <div
      style={{display: 'flex'}}>
        <Canvas selectedId={selectedElementId} elements={stageElements} onElementMove={handleElementMove} onElementClick={handleElementClick} />
        <InformationSideBar selectedId={selectedElementId}></InformationSideBar>
      </div>

    </div>
  );
};

export default Stage;
