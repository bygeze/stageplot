// src/components/stage/InformationSideBar.js
import React, { useState } from 'react';
import './InformationSideBarElement.css'

const InformationSideBarElement = ({title, children}) => {
    const [toggleDisplay, setToggleDisplay] = useState(false);

  return (
    <div
        className='information-side-bar-element'>
        <div className="isde-modal-cont">
            <div className="isde-modal-title">
                {title}
                <span className={`isde-modal-downbutton react-emoji ${toggleDisplay ? 'isde-modal-downbutton-rotate' : ''}`} role="img" aria-label="downwards button" onClick={(e) => {setToggleDisplay(!toggleDisplay)}}>🔽</span>
            </div>
            <div className={`isde-modal-content ${toggleDisplay ? 'show' : ''}`} >
                <div>
                    <div className="isde-modal-content-style">
                    {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default InformationSideBarElement;

