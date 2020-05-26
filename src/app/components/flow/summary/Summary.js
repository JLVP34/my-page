import React from 'react';

import './Summary.css';
import { Trans } from "react-i18next";

const Summary = () => {
    return (
        <section className="summary">
            <div className="summary-text">
                <div className="summary-block first">
                    <Trans>Hi! Glad to see you here!</Trans>
                </div>
                <div className="summary-block second">
                    <Trans>Hi! Glad to see you here!</Trans>
                </div>
                <div className="summary-block third">
                    <Trans>Hi! Glad to see you here!</Trans>
                </div>
            </div>
        </section>
    );
};

export default Summary