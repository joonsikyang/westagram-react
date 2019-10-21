import React from 'react';
import Nav from '../../components/Nav/Nav'
import MainArea from '../../components/MainArea/MainArea'
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Nav/>
                <MainArea/>
            </div>
        );
    }
}

export default Main;

