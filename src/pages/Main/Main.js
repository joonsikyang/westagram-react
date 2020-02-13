import React from 'react';
import Nav from './MainComponents/Nav/Nav'
import Article from './MainComponents/Article/Article';
import Aside from './MainComponents/Aside/Aside';
import './Main.scss';

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Nav/>
                <div className="main-bottom">
                    <Article/>
                    <Aside/>
                </div>
            </div>
        );
    }
}

export default Main;

