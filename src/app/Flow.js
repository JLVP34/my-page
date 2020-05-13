import React, { Fragment, useState } from 'react';

import Sections from './pages/sections/Sections';
import Lang from './components/shared/lang/Lang';
import Github from './components/shared/github/Github';

const Flow = () => {
  const [typed, setTyped] = useState(false);

  const typeCompleted = () => {
    setTyped(true);
  };

  return (
    <Fragment>
      {typed ? <Github/>: null}
      {typed ? <Lang/> : null}
      <Sections typeCallback={typeCompleted}/>
    </Fragment>
  );
}

export default Flow;