import React from "react";
import './Header.css'

export default ({black}) => {
    return (
        <header className={black ? 'black' : '' }>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                <img src="https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/baffc96f5eccbde6402befe0_rw_600.png?h=cc45688ebccb59201761f059f3f4e5e3" alt="User"/>    
                </a>
            </div>
        </header>
    );
}