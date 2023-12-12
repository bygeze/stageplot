  // src/components/stage/Canvas.js
  import React from 'react';
  import ShureSM58 from './elements/microphones/ShureSM58';
  import DBX_231 from './elements/eqs/DBX_231';
  import Clavia_Nord_Stage_4_88 from './elements/keyboards/Clavia_Nord_Stage_4_88';
  import './Canvas.css'; // Importa el archivo de estilos
  import './elements/Elements.css'

  const Canvas = ({ selectedId, elements, onElementMove, onElementClick }) => {
    var offsetTemp = {x: 0, y: 0};

    const handleDragStart = (e, id) => {
      const { clientX, clientY } = e;

      const elementRect = e.target.firstChild.firstChild.getBoundingClientRect();

      const offset = {
        x:     clientX - elementRect.left,
        y:     clientY - elementRect.top ,
      }

      offsetTemp = offset;  


      e.dataTransfer.setData('text/plain', id);
    };

    const handleDragOver = (e) => {
      //console.log('Drag over');
      e.preventDefault();
    };

    const handleDrop = (e) => {
      const { clientX, clientY } = e;
      e.preventDefault();
      const id = e.dataTransfer.getData('text/plain');
      //console.log(offsetTemp);
      console.log(offsetTemp);

      const dropPlace =  { 
        x: clientX - offsetTemp.x, 
        y: clientY - offsetTemp.y - 50 - 17,
      };

      // Obtener la posición relativa del ratón dentro del elemento movido
      onElementMove(id, dropPlace);
    };

    const handleClick = (e, id) => {
      onElementClick(id);
    }

    const componentMap = {
      ShureSM58,
      DBX_231,
      Clavia_Nord_Stage_4_88
      // Otros tipos de elementos según sea necesario
    };

    const selected = 'selected';

    return (
      <div className="canvas" onDragOver={handleDragOver} onDrop={handleDrop}>
        {/* Renderiza los elementos aquí */}

        {
        elements.map((element) => {
          let sel = "";
          if(element.id == selectedId) {
            sel = selected;
          }
          const ElementComponent = componentMap[element.type];
          return ElementComponent ? (
            <div
              key={element.id}
              className="draggable-element"  // Agrega esta clase
              draggable
              onDragStart={(e) => handleDragStart(e, element.id)}
              onClick={(e) => handleClick(e, element.id)}
            >
              <ElementComponent
                  key={element.id} 
                  id={element.id} 
                  position={element.position}
                  className={sel} />
            </div>
          ) : null;
        })}
      </div>
    );
  };

  export default Canvas;
