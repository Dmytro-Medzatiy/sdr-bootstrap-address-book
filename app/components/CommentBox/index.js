import React, {Component} from 'react';
import CommentList from 'components/CommentList';
import CommentForm from 'components/CommentForm';


export default class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.chatMessages,
      editableComment: {author:'', text:'', id:0},
      id_n: props.chatMessages[this.props.chatMessages.length -1].id + 1
    };
  }

    onAddorUpdateComment = (author, text, id) => {
        if (id == 0) {
            const newComment = {
                id: this.state.id_n,
                author: author,
                text: text
            };

            let comments = Object.assign({}, this.state);

            comments.data.push(newComment);
            const newData = comments.data;

            this.setState({
                data: newData,
                editableComment: {author: '', text: '', id: 0},
                id_n: this.state.id_n + 1
            });

        } else {
            const newData = this.state.data.map((comment) => {
                if (comment.id == id) {
                    comment.author = author;
                    comment.text = text;
                }
                return comment;
            });

            this.setState({
                data: newData,
                editableComment: {author: '', text: '', id: 0}
            });
        }
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.chatMessages !== this.state.data) {
            this.setState({
                data: nextProps.chatMessages,
                editableComment: {author: '', text: '', id: 0},
                id_n: nextProps.chatMessages[nextProps.chatMessages.length - 1].id + 1
            });
        }
    }


  onGetEditableComment = (el) => {
    const id = el.currentTarget.dataset.id;
    let editableComment;
    if (id) {
      editableComment = this.state.data.find((comment) => {
        return comment.id == id;
      });
    } else {
      editableComment = {author:'', text:'', id:0};
    }
    this.setState({editableComment: editableComment});
  }

    render() {
        const chatBoxStyle = {
            height: 250,
            overflow: 'auto',
            border: '1px solid #ccc',
            marginBottom: '20px'
        };
        
        const {data, editableComment} = this.state;
        const {chatName} = this.props;
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">{chatName}</h3>
                </div>
                <div className="panel-body">
                    <div style={chatBoxStyle} className="pre-scrollable">
                        <CommentList onGetEditableComment={this.onGetEditableComment}
                                     data={data}
                        />
                    </div>
                    <CommentForm onUpdate={this.onAddorUpdateComment}
                                 data={data}
                                 editableComment={editableComment}
                    />
                </div>
            </div>
                 
           
        );
    }

}
