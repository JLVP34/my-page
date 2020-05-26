import React, { Fragment, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import Sections from './pages/sections/Sections';
import Lang from './components/shared/lang/Lang';
import Github from './components/shared/github/Github';

const Flow = () => {
  const { i18n } = useTranslation();
  const [typed, setTyped] = useState(false);
  const [langChanged, setLangChanged] = useState(false);

  const onLangChanged = useCallback(
    (lang) => {
      i18n.changeLanguage(lang);
      setLangChanged(true);
    },
  [i18n]);

  const onTypeCompleted = useCallback(
    () => setTyped(true),
  []);

  return (
    <Fragment>
      {typed ? <Github/>: null}
      {typed ? <Lang language={i18n.language} langCallback={onLangChanged}/> : null}
      <Sections typed={typed} typeCallback={onTypeCompleted} langChanged={langChanged}/>
    </Fragment>
  );
}

export default Flow;