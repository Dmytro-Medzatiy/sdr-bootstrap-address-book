import React, {Component} from 'react';
import Comment from 'components/Comment';

class CommentList extends Component {

  render() {
    var id_n =1;
    var commentNodes = this.props.data.map(function(comment, index){

      return (
        <Comment author={comment.author} key={index} text={comment.text}>
          
        </Comment>
      );
    });

    return (
      <div className="CommentList">
        {commentNodes}
      </div>
    );
  }
  
}

export default CommentList;
