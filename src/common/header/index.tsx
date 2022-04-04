import './index.scss';
import React from 'react';
import brandLogo from '../../../src/assets/images/Brandmark.png';

const Header = () => {
    return (
        <div className="header">
            <img src={brandLogo} />
        </div>
    );
};

export default Header;
