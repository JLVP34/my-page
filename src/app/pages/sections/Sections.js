import React from 'react';
import Brand from '../../components/flow/brand/Brand';

import './Sections.css';

const Sections = ({ typeCallback }) => (
    <div className="sections">
        <Brand typeCallback={typeCallback}/>
    </div>
);

export default Sections;