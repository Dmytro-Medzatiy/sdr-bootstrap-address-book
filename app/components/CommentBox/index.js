import React, {Component} from 'react';
import CommentList from 'components/CommentList';
import CommentForm from 'components/CommentForm';



function nextIndex(arr) {

    let id;
    if (!arr.length) {return 0; }
    else { const id_arr = arr.map((x) => {return x.id});
      id = Math.max(...id_arr) }
    return id+1;
  }

class CommentBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      id_n: nextIndex(props.data)
    };
    this.onAddComment = this.onAddComment.bind(this);
  }

  onAddComment(author,text) {

    const newComment = { id: this.state.id_n,
                          author: author,
                          text: text};
    const newData = this.state.data.concat(newComment);
    this.setState({data: newData,
                    id_n: this.state.id_n+1});

    this.props.onAddComment(newData);

  }
  componentWillReceiveProps(nextProps) {
    
    if (nextProps.data !== this.state.data) {
      this.setState({ data: nextProps.data });
    }
  }
  
  render() {
    return (
      <div className="CommentBox">

        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onUpdate={this.onAddComment} />

      </div>
    );
  }

}

export default CommentBox;
