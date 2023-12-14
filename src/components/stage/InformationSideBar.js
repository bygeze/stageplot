// src/components/stage/InformationSideBar.js
import React from 'react';
import './InformationSideBar.css'
import InformationSideBarElement from './InformationSideBarElement';
import ElementsTable from './ElementsTable';
import ToolBox from './ToolBox';

const InformationSideBar = ({elements, selectedTool, onToolClick}) => {
  return (
    <div
        className='information-side-bar'>
          <InformationSideBarElement title="Toolbox">
            <ToolBox selectedTool={selectedTool} onToolClick={onToolClick}></ToolBox>
          </InformationSideBarElement>
          <InformationSideBarElement title="Elements in Canvas">
            <ElementsTable elements={elements}></ElementsTable>
          </InformationSideBarElement>
    </div>
  );
};

export default InformationSideBar;
