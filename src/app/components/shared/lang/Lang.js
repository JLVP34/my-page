import React, { useState } from 'react';

import './Lang.css';

const languages = [
    {id: 'gb', name: 'English'},
    {id: 'es', name: 'Español'}
];

const Lang = () => {
    const [lang, setLang] = useState('gb');
    const [shown, setShown] = useState(false);

    const onClickFlag = () => {
        if (!shown) setShown(true);
    };

    const onHideShown = () => {
        if (shown) setShown(false);
    };

    const onSelectLang = (newLang) => {
        if (lang !== newLang) setLang(newLang); 
        onHideShown();
    };

    const buildLangItem = ({id, name}, hr) => (
        <div key={id}>
            <div className="item" onClick={() => onSelectLang(id)}>
                <img className="flag-icon" alt={name} src={`images/flags/${id}.svg`}/> 
                <span>{name}</span>
            </div>
            {hr ? <hr></hr> : null}
        </div>
    );

    return (
        <div className="language">
            <div className="flag" onClick={onClickFlag}>
                <img alt="English" src={`images/flags/${lang}.svg`}/>
            </div>
            <div className={`modal ${shown ? 'shown' : ''}`} onClick={onHideShown}></div>
            <div className={`selector ${shown ? 'shown' : ''}`}>
                {languages.map((lang, i) => buildLangItem(lang, languages.length !== i+1))}
            </div>
        </div>
    )
};

export default Lang;