import React, {Component} from 'react';
import CommentList from 'components/CommentList';
import CommentForm from 'components/CommentForm';

var arr = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

class CommentBox extends Component {


  constructor(props) {
    super(props);
    this.state = {
      data: arr,
      edit: {'author':'','text':'','id':0},
      id_n: 3
    };
    this.onNewComment = this.onNewComment.bind(this);
    this.onUpdateComment = this.onUpdateComment.bind(this);
  }

  onNewComment(author,text, id) {
      if (id == 0) {
          const newComment = {
              id: this.state.id_n,
              author: author,
              text: text
          };
          const newData = this.state.data.concat(newComment);
          this.setState({
              data: newData,
              edit: {'author': '', 'text': '', 'id': 0},
              id_n: this.state.id_n + 1
          });
      }
      else
      {
          var newData = this.state.data;
          newData[id-1]['author'] = author;
          newData[id-1]['text'] = text;
          this.setState({
              data: newData,
              edit: {'author': '', 'text': '', 'id': 0}
          });
      }
  }

  onUpdateComment(el)
  {
      var id = el._targetInst._hostParent._hostNode.id;
      var mas;
      if (id)
      {
          mas = this.state.data[id-1];
      }
      else
      {
          mas = {'author':'','text':'','id':0};
      }
      this.setState({edit: mas});
  }

  render() {
    return (
      <div className="CommentBox col-md-6 col-md-offset-3">
        <h1>Comments</h1>
        <CommentList onUpdateComment={this.onUpdateComment} data={this.state.data} />
        <CommentForm onUpdate={this.onNewComment} data={this.state.data} edit={this.state.edit} />

      </div>
    );
  }

}

export default CommentBox;
