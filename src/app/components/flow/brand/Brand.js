import React from 'react';
import { useTranslation } from 'react-i18next';

import Typewriter from '../../shared/typewriter/Typewriter';
import onScroll from '../../shared/functions/effect/onScroll';

import './Brand.css';

const BRAND_CLASS = 'brand';

const Brand = ({ typeCallback, langChanged }) => {
    const { t } = useTranslation();
    onScroll(BRAND_CLASS);

    return (
        <section className={BRAND_CLASS}>
            <div className="label">
                <span className="name">
                    Juan Luis Vazquez
                </span>
                <span className="surname">
                    {langChanged ?
                        <p>{t('brandLabel')}</p> :
                        <Typewriter label={t('brandLabel')} callback={typeCallback}/>}
                </span>
            </div>
        </section>
    );
};

export default Brand;