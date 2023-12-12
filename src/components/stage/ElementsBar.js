// src/components/stage/ElementsBar.js
import React, { useState } from 'react';
import './ElementsBar.css'; // Añade estilos según necesites

const ElementsBar = ({ addElementToCanvas }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      name: 'Microphones',
      elements: ['ShureSM58', 'OtherMicrophone1', 'OtherMicrophone2'],
    },
    {
      name: 'Audio Interfaces',
      elements: ['SteinbergUR22', 'OtherInterface1', 'OtherInterface2'],
    },
    {
      name: 'Speakers',
      elements: ['KRK_Rokit_5', 'OtherSpeaker1', 'OtherSpeaker2'],
    },
    {
      name: 'EQs',
      elements: ['DBX_231', 'OtherSpeaker1', 'OtherSpeaker2'],
    },
    {
      name: 'Keyboards',
      elements: ['Clavia_Nord_Stage_4_88', 'OtherSpeaker1', 'OtherSpeaker2'],
    },

  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleElementClick = (element) => {
    // Lógica para crear/instanciar el componente correspondiente
    if (addElementToCanvas) {
      addElementToCanvas(element);
    }
  };

  return (
    <div className="elements-bar">
      {categories.map((category) => (
        <div
          key={category.name}
          className="category-dropdown"
          onMouseEnter={() => handleCategoryClick(category.name)}
          onMouseLeave={() => handleCategoryClick(category.name)}
        >
          <a>{category.name}</a>
          {selectedCategory === category.name && (
            <div className="category-dropdown-content">
              {category.elements.map((element) => (
                <a
                  key={element}
                  onClick={() => handleElementClick(element)}
                >
                  {element}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ElementsBar;
