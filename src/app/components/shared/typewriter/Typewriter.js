import React, { useState, createRef, useEffect, memo } from 'react';
import { type } from '@camwiegert/typical';

import styles from './styles.module.css'

const Typewriter = ({ steps }) => {
  const ref = createRef();
  const [classNames, setClassNames] = useState([styles.typicalWrapper]);

  useEffect(() => {
      type(ref.current, ...steps)
      .then(() => setClassNames([]));
  });

  return <p ref={ref} className={classNames.join(' ')}/>;
}

export default memo(Typewriter);