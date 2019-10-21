import React, {Component} from 'react'

export class CommentInputContainer extends Component {
    render() {
        return (
            <form
                onSubmit={this.props.onSubmit}
                className="comment-input-container">
                <div>
                    <textarea 
                        id="comment-input" 
                        placeholder="댓글 달기..."
                        onChange={this.props.textVal}
                        value={this.props.value}
                        >
                    </textarea>
                </div>
                <div>
                    <button 
                        id="comment-submmit-button" 
                        type="submit"
                        onClick={this.props.onClick}
                    >
                        게시
                    </button>
                </div>
            </form>
        )
    }
}

export default CommentInputContainer
