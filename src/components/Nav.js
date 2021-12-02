import React from 'react';

function Nav() {
    return (
        <header>
            <div className="nav-wrapper">
                <nav className="nav-btns">
                    <ul>
                        <a href="/">Home</a>
                        <a href="/portfolio.html">Portfolio</a>
                        <a href="/">Resume</a>
                        <a href="/">Contact</a>
                    </ul>
                </nav>
            </div>
        </header> 
    );
}

export default Nav;