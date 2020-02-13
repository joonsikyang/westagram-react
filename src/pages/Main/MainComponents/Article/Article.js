import React, {Component} from 'react'
import commentData from './CommentData'
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
                id: commentData.length + 3,
                userID: "user" + commentData.length,
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
                        src="https://scontent-gmp1-1.cdninstagram.com/vp/e7643153cf33ecccd35735f3f5737541/5E1727F7/t51.2885-19/s150x150/38502238_2023435627722875_8237163518952996864_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com"
                        alt="profile-img"/>
                    <div className="id-dots-container">
                        <div className="id">joonsikyang</div>
                        <div className="dots">
                            <img
                                src="https://icon-library.net/images/3-dots-icon/3-dots-icon-24.jpg"
                                alt="option"/>
                        </div>
                    </div>
                </header>
                <div className="feed-img">
                    <img
                        src="https://joonsikyang.files.wordpress.com/2019/10/domore.jpeg?w=825&h=510&crop=1"
                        alt="feed-img"/>
                </div>
                <div className="feed-bottom">
                <div className="buttons-container">
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
                            className="feed-save-button"
                            src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-07-512.png"
                            alt="save"/>
                    </div>
                </div>
                <div className="likes-count">
                    <span>좋아요 4,390개</span>
                </div>
                <div className="feed-content">
                    <span className="id">joonsikyang</span>
                    <span>그냥 있는("exist") 사람이 아니라 존재하는("present")사람이 돼라. 있는
                        사람과 존재하는 사람은 완전히 다르다. 그냥 있는 사람은 주변에 아무런 영향을 주지 못한다. 반면 존재하는 사람은 주변에 영향을 주면서
                        상호작용을 한다. - '미래의 교육, 올린'</span>
                </div>
                <div className="see-comments">
                    댓글 230개 모두 보기
                </div>
                <div className="comments-container">
                    {commentList}
                </div>
                <div className="upload-time">
                    <span>48분 전</span>
                </div>
                <form
                    className="comment-input-container"    
                    onSubmit={this.handleSubmit}>
                        <textarea 
                            id="comment-input" 
                            placeholder="댓글 달기..."
                            onChange={this.handleComment}
                            value={this.state.textVal}
                            >
                        </textarea>
                        <button 
                            id="comment-submmit-button" 
                            type="submit"
                            onClick={this.props.onClick}
                        >
                            게시
                        </button>
                </form>
            </div>
            </article>
        )
    }
}

export default Article