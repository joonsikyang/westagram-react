import React, {Component} from 'react'
import Header from './Header/Header';
import Image from './Image/Image';
import FeedBottom from './FeedBottom/FeedBottom';

export class Article extends Component {
    render() {
        return (
            <div className="feeds">
                <div className="feed-container">
                    <Header/>
                    <Image/>
                    <FeedBottom/>
                </div>
            </div>
        )
    }
}

export default Article