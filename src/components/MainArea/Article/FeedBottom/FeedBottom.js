import React, {Component} from 'react'
import FeedButtonContainer from './FeedButtonContainer/FeedButtonContainer'
import LikesCount from './LikesCount/LikesCount'
import FeedContentContainer from './FeedContentContainer/FeedContentContainer'
import CommentsCountSeeAll from './CommentsCountSeeAll/CommentsCountSeeAll'
import CommentsContainer from './CommentsContainer/CommentsContainer'
import UploadTime from './UploadTime/UploadTime'
import CommentInputContainer from './CommentInputContainer/CommentInputContainer'
import commentData from './CommentsContainer/CommentData';

export class FeedBottom extends Component {
    constructor() {
        super()
        this.state = {
            textVal: ''
        }
    }

    handleComment = (e) => {
        // 항상 잘 받아오는지 먼저 확인히기
        // console.log(e.target.value)
        this.setState({textVal: e.target.value})
        // console.log(this.state) 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        commentData.push(
            {id: commentData.length + 3,
            userID: "user" + commentData.length,
            comment: this.state.textVal})
        this.setState({
            textVal: '' 
        })
        console.log(this.state)
    }

    render() {
        return (
            <div className="feed-bottom">
                <FeedButtonContainer/>
                <LikesCount/>
                <FeedContentContainer/>
                <CommentsCountSeeAll/>
                <CommentsContainer/>
                <UploadTime/>
                <CommentInputContainer 
                    textVal={this.handleComment}
                    value={this.state.textVal}
                    onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default FeedBottom