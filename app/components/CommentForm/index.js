import React, {Component} from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    };

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    //TODO: send request to the server

    this.props.onUpdate(author,text);
    this.setState({author: '', text: ''});
  }

  render() {
    return(


      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
          style={{marginRight: "1em"}}

        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
          style={{marginRight: "1em"}}
        />
        <input type="submit" value="Post" className="btn btn-primary"/>
      </form>
            
    );
  }

}

export default CommentForm;
