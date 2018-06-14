import React from 'react';
const Footer = props => {
    return <div className="footer">
        <h5>@ BIT-blog Team members (Vladimir, Kristina, Zeljko){props.name}</h5>
    </div>;
};

export default Footer;
