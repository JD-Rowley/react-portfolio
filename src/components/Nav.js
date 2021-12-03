import React from 'react';

function Nav(props) {
    const tabs = ['Home', 'Portfolio', 'Resume', 'Contact'];
    return (
        <header>
            <div className="nav-wrapper">
                <nav className="nav-btns">
                    <ul>
                        {tabs.map(tab => (
                            <a
                                href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
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