// src/components/stage/InformationSideBar.js
import React from 'react';
import './InformationSideBar.css'
import InformationSideBarElement from './InformationSideBarElement';
import ElementsTable from './ElementsTable';

const InformationSideBar = ({elements}) => {
  return (
    <div
        className='information-side-bar'>
          <InformationSideBarElement title="Elements in Canvas">
            <ElementsTable elements={elements}>Inside</ElementsTable>
          </InformationSideBarElement>
    </div>
  );
};

export default InformationSideBar;
