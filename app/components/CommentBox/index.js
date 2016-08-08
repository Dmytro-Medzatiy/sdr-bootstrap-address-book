import React, {Component} from 'react';
import CommentList from 'components/CommentList';
import CommentForm from 'components/CommentForm';


var arr = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

class CommentBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
                  data: arr
                  };
    this.onNewComment = this.onNewComment.bind(this);
  }

  onNewComment(author,text) {

    const newComment = { author: author,
                          text: text};
    const newData = this.state.data.concat(newComment);
    this.setState({data: newData});

  }

  render() {
    return (
     <div className="row">
      <div className="col-lg-2 col-md-2 col-sm-1"></div>
      <div className="CommentBox col-lg-8 col-md-8 col-sm-10 col-xs-12">
        <h2 style={{textAlign:"center"}}>All Comments</h2>
        <CommentList data={this.state.data} />
        <CommentForm onUpdate={this.onNewComment} />

      </div>
       <div className="col-lg-2 col-md-2 col-sm-1"></div>
     </div>
    );
  }

}

export default CommentBox;
