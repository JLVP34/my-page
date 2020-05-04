import React from 'react';
import Typewriter from '../../../shared/typewriter/Typewriter';

import './Brand.css';

const Brand = ({ typeCallback }) => {
    return (
        <div className="container">
            <div className="label">
                <span className="name">
                    Juan Luis Vazquez
                </span>
                <span className="surname">
                    <Typewriter label={'Full-Stack Software Engineer'} millis={2000} callback={typeCallback}/>
                </span>
            </div>
        </div>
    );
};

export default Brand;