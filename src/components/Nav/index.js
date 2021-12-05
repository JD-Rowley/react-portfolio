import React from 'react';
import './index.css';

function Nav(props) {
    const tabs = ['About', 'Portfolio', 'Resume', 'Contact'];

    return (
        <header>
            <div className="page-location">
                <h1>{props.currentPage}</h1>
            </div>
            <div className="nav-wrapper">
                <nav className="nav-btns">
                    <ul>
                        {tabs.map(tab => (
                            <a
                                href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
                                key={tab}
                            >
                                {tab}
                            </a>
                        ))}
                    </ul>
                </nav>
            </div>
        </header> 
    );
}

export default Nav;