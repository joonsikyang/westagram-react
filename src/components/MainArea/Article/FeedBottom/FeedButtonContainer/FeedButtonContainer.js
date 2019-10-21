import React, {Component} from 'react'

export class FeedButtonContainer extends Component {
    render() {
        return (
            <div className="feed-button-container">
                <div className="feed-button-left-container">
                    <div className="feed-button-left">
                        <img
                            className="feed-button-icon"
                            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                            alt="like"/>
                    </div>
                    <div className="feed-button-left">
                        <img
                            className="feed-button-icon"
                            src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-06-512.png"
                            alt="comment"/>
                    </div>
                    <div className="feed-button-left">
                        <img
                            className="feed-button-icon"
                            src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-21-512.png"
                            alt="share"/>
                    </div>
                </div>
                <div className="feed-button-right">
                    <img
                        id="feed-save-button"
                        className="feed-button-icon"
                        src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-07-512.png"
                        alt="save"/>
                </div>
            </div>
        )
    }
}

export default FeedButtonContainer
