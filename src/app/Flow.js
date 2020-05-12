import React, {useState} from 'react';

import First from './pages/flow/first/First';
import Lang from './components/shared/lang/Lang';
import Github from './components/shared/github/Github';

const Flow = () => {
  const [typed, setTyped] = useState(false);

  const typeCompleted = () => {
    setTyped(true);
  };

  return (
    <div>
      {typed ? <Github/>: null}
      {typed ? <Lang/> : null}
      <First typeCallback={typeCompleted}/>
    </div>
  );
}

export default Flow;