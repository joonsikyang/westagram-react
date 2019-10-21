import React, { Component } from 'react'

export class Comment extends Component {
    render() {
        return (
            <div className="comment">
               <span className="commentUserID">{this.props.userID}</span>
               <span className="commentComment">{this.props.comment}</span>
            </div>
        )
    }
}

export default Comment
