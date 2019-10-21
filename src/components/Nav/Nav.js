import React from 'react';
import NavLeft from './Nav-left';
import NavSearch from './Nav-search';
import NavRight from './Nav-right';

class Nav extends React.Component {
    render() {
        return (
            <nav id="nav">
                <div className="nav-items-container">
                    <NavLeft/>
                    <NavSearch/>
                    <NavRight/>
                </div>
            </nav>

        );
    }
}

export default Nav;