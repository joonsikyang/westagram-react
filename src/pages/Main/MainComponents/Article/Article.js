import React, {Component} from 'react'
import commentData from './CommentData'
import garu from '../../../../img/garu.png'
import './Article.scss'

export class Article extends Component {
    constructor() {
        super()
        this.state = {
            textVal: ''
        }
    }

    handleComment = (e) => {
        this.setState({textVal: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        commentData.push(
            {
                id: commentData.length + 4,
                userID: "user" + (commentData.length + 1),
                comment: this.state.textVal
            }
        );
        this.setState({
            textVal: '' 
        });
    }

    render() {
        const commentList = commentData.map(comment => {
            return(
                <div className="comment">
                    <span className="id">{comment.userID}</span>
                    <span className="comment-content">{comment.comment}</span>
                </div>
            )
        })

        return (
            <article className="Article">
                <header>
                    <img
                        src={garu}
                        alt="img"/>
                    <div className="id-dots">
                        <span>joonsikyang</span>
                        <img
                            src="https://icon-library.net/images/3-dots-icon/3-dots-icon-24.jpg"
                            alt="option"/>
                    </div>
                </header>
                <div className="feed-img">
                    <img
                        src={garu}
                        alt="feed-img"/>
                </div>
                <div className="feed-bottom">
                    <div className="icons-container">
                        <div className="left-icons">
                            <div className="left-icon">
                                <img
                                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                                    alt="like"/>
                            </div>
                            <div className="left-icon">
                                <img
                                    src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-06-512.png"
                                    alt="comment"/>
                            </div>
                            <div className="left-icon">
                                <img
                                    src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-21-512.png"
                                    alt="share"/>
                            </div>
                        </div>
                        <div className="right-icon">
                            <img
                                src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-07-512.png"
                                alt="save"/>
                        </div>
                    </div>
                <div className="likes-count">
                    좋아요 4,390개
                </div>
                <div className="feed-content">
                    <span className="id">joonsikyang</span>
                    <span>밀가루 안녕</span>
                </div>
                <div className="see-comments">댓글 {commentData.length}개
                </div>
                <div className="comments-container">
                    {commentList}
                </div>
                <div className="comment-input-container">
                    <textarea 
                        placeholder="댓글 달기..."
                        onChange={this.handleComment}
                        value={this.state.textVal}
                        >
                    </textarea>
                    <button 
                        className={this.state.textVal.length > 0 ? "submitReady" : "submitNotYet"}
                        onClick={this.handleSubmit}
                    >
                        게시
                    </button>
                </div>
            </div>
            </article>
        )
    }
}

export default Article