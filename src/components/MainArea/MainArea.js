import React, {Component} from 'react'
import Article from './Article/Article'
import Aside from './Aside/Aside'

export class MainArea extends Component {
    render() {
        return (
            <div id="main">
                <div id="main-container">
                    <Article/>
                    <Aside/>
                </div>
            </div>
        )
    }
}

export default MainArea
