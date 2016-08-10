import React, {Component} from 'react';
var Remarkable = require('remarkable');

export default class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    }
  }

  rawMarkup() {
    let md = new Remarkable();
    let rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup};
  }

  handleMouseOver = () => {
    this.setState({hovered: true});
  }

  handleMouseOut = () => {
    this.setState({hovered: false});
  }

  hoverStyle() {
    if (this.state.hovered) {
      return {backgroundColor: '#ecf0f1'}
    } else {
      return {backgroundColor: 'white'}
    }
  }

  render() {
    const commentStyle = {
      fontStile: '1.5rem',
      lineHeight: '1.5rem'
    }
    const headCommentStyle = {
      fontWeight:'bold'
    }
    const {id, author, onGetEditable} = this.props;
    return(
      <div id={id} data-id={id}
                              className="comment"
                              onClick={onGetEditable}
                              onMouseOver={this.handleMouseOver}
                              onMouseOut={this.handleMouseOut}
                              style={this.hoverStyle()}>
        <h4 className="commentAuthor" style={headCommentStyle}>
          {author}
        </h4>
        <span style={commentStyle}
              dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }

}
