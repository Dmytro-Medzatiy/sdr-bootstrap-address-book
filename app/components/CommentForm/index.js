import React, {Component} from 'react';
import Input from 'components/Input';

export default class CommentForm extends Component {

  componentWillReceiveProps(nextProps) {
      this.refs['inputForAuthor'].setValue(nextProps.editableComment.author);
      this.refs['inputForText'].setValue(nextProps.editableComment.text);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const author = this.refs['inputForAuthor'].getValue().trim();
    const text = this.refs['inputForText'].getValue().trim();
    if (!text || !author) {
      return;
    }

    this.props.onUpdate(author, text, this.props.editableComment.id);
    this.refs['inputForAuthor'].setValue('');
    this.refs['inputForText'].setValue('');
  }

  render() {
    const styleSpan = {
      backgroundColor:'#2e6da4',
      color:'white',
      borderColor:'white'
    }
    
    return (
        <form className="commentForm" onSubmit={this.handleSubmit}>
            <div className="input-group">
                <Input ref="inputForAuthor" placeholder="Your name" type="text" className="form-control"/>
                <span className="input-group-addon" style={styleSpan}>&</span>
                <Input ref="inputForText" placeholder="Say something..." type="text" className="form-control"/>
          <span className="input-group-addon" style={styleSpan}>
            <Input type="submit" value="Post"/>
          </span>
            </div>
        </form>
    );
  }

}
