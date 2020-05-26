import React, { useState, createRef, useEffect, memo } from 'react';
import { type } from '@camwiegert/typical';

import styles from './styles.module.css'

const Typewriter = ({ label, callback }) => {
  const [classNames, setClassNames] = useState([styles.typewriter]);
  const [ref,] = useState(createRef());

  useEffect(() => {
    setClassNames([styles.typewriter]);
    type(ref.current, ...[label, 1000])
    .then(() => {
      setClassNames([]);
      callback();
    });
  }, [label, ref, callback]);

  return <p ref={ref} className={classNames.join(' ')}/>;
}

export default memo(Typewriter);