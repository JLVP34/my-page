import React from 'react';
import Brand from '../../components/flow/brand/Brand';

import './Sections.css';
import Summary from '../../components/flow/summary/Summary';

const Sections = ({ typed, typeCallback, langChanged }) => (
    <div className="sections">
        <Brand typeCallback={typeCallback} langChanged={langChanged}/>
        {typed ? <Summary/> : null}
    </div>
);

export default Sections;