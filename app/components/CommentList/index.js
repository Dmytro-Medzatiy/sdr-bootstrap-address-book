import React, {Component} from 'react';
import Comment from 'components/Comment';

export default class CommentList extends Component {

    render() {
    //console.log(JSON.stringify(this.props.data));
        const {onSelectComment, data} = this.props;

        const commentNodes = data.map((comment, index) => {
            if (typeof comment.author === 'undefined' || typeof comment.text === 'undefined') {
                return (
                    <Comment author="undefined"
                        key={index}
                        id={comment.id}
                        onSelect={onSelectComment}>
                        undefined
                    </Comment>
                );
            }
            return (
                <Comment
                    author={comment.author}
                    key={index}
                    id={comment.id}
                    onSelect={onSelectComment}>
                    {comment.text}
                </Comment>
            );
        });

    const styleCommentList = {
      paddingLeft: '20px'
    };

    return (
      <div className="CommentList"
           style={styleCommentList}>
        {commentNodes}
      </div>
    );
  }

}
