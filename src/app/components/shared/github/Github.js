import React from 'react';

import './Github.css';

const Github = () => {
    const goToGithubPage = () => {
        window.location.href = 'https://github.com/JLVP34';
    };

    return (
        <div className="github">
            <img className="github-icon" alt="Github" src="images/brands/github.png" onClick={goToGithubPage}/>
        </div>
    );
};

export default Github;