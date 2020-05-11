import React, { useState } from 'react';

import './Lang.css';

const Lang = () => {
    const [lang, setLang] = useState('gb');
    const [shown, setShown] = useState(false);

    const onClickFlag = () => {
        if (!shown) setShown(true);
    }

    const onSelectLang = (newLang) => {
        if (lang !== newLang) setLang(newLang); 
        if (shown) setShown(false);
    }

    return (
        <div className="language">
            <div className="flag" onClick={onClickFlag}>
                <img alt="English" src={`images/flags/${lang}.svg`}/>
            </div>
            <div className={`modal ${shown ? 'shown' : ''}`}></div>
            <div className={`selector ${shown ? 'shown' : ''}`}>
                <div className="item" onClick={() => onSelectLang('gb')}>
                    <img className="flag-icon" alt="English" src="images/flags/gb.svg"/> 
                    <span>English</span>
                </div>
                <hr></hr>
                <div className="item" onClick={() => onSelectLang('es')}>
                    <img className="flag-icon" alt="Español" src="images/flags/es.svg"/>
                    <span>Español</span>
                </div>
            </div>
        </div>
    )
};

export default Lang;