import React, {useState} from 'react';

import First from './pages/flow/first/First';
import Lang from './components/shared/lang/Lang';

const Flow = () => {
  const [typed, setTyped] = useState(false);

  const typeCompleted = () => {
    console.log('hey!');
    setTyped(true);
  };

  return (
    <div>
      {typed ? <Lang/> : null}
      <First typeCallback={typeCompleted}/>
    </div>
  );
}

export default Flow;