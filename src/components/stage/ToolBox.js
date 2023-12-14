import React from 'react';

import './ToolBox.css';

const ToolBox = ({ selectedTool, onToolClick }) => {
  return (
    <div className='tool-box'>
    <div className={`tool ${selectedTool === 'pointer' ? 'tool-selected' : ''}`}
         onClick={(e) => {onToolClick("pointer")}}>
      <span>👆</span>
    </div>
    <div className={`tool ${selectedTool === 'eraser' ? 'tool-selected' : ''}`}
         onClick={(e) => {onToolClick("eraser")}}>
      <span>🗑️</span>
    </div>         
    <div className={`tool ${selectedTool === 'scale-up' ? 'tool-selected' : ''}`}
         onClick={(e) => {onToolClick("scale-up")}}>
      <span>➕</span>
    </div>         
    <div className={`tool ${selectedTool === 'scale-down' ? 'tool-selected' : ''}`}
         onClick={(e) => {onToolClick("scale-down")}}>
      <span>➖</span>
    </div>         
    </div>
  );
};

export default ToolBox;
