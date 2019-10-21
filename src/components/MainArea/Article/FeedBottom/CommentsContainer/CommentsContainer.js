import React, {Component} from 'react'
import commentData from './CommentData'
import Comment from './Comment'

export class CommentsContainer extends Component {
    render() {
        const commentlist = commentData.map(comment => <Comment key={comment.id} userID={comment.userID} comment={comment.comment}/>
        )
        
        return (
            <div id="comments-container">
                {commentlist}
            </div>
        )
    }
}

export default CommentsContainer
