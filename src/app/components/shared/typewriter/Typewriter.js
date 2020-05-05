import React, { useState, createRef, useEffect, memo } from 'react';
import { type } from '@camwiegert/typical';

import styles from './styles.module.css'

const Typewriter = ({ label, millis, callback }) => {
  const [classNames, setClassNames] = useState([styles.typewriter]);
  const [ref,] = useState(createRef());

  useEffect(() => {
      type(ref.current, ...[label, millis])
      .then(() => {
        setClassNames([]);
        callback();
      });
  }, [label, millis, ref, callback]);

  return <p ref={ref} className={classNames.join(' ')}/>;
}

export default memo(Typewriter);