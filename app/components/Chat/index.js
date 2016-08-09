/**
 * Created by DMedzatiy on 09-Aug-16.
 */

import React from 'react';
import CommentBox from 'components/CommentBox';
import ChatSwitcher from 'components/ChatSwitcher';

const arr = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"},
    {id: 5, author: "Samuel Jeckson", text: "Hello another one comment"}
];

const arr2 = [
    {id: 1, author: "Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

const arr3 = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
];

const chats = [
    {
        chat_id: 0,
        name: 'chat1',
        messages: arr
    },
    {
        chat_id: 1,
        name: 'chat2',
        messages: arr2
    },
    {
        chat_id: 2,
        name: 'chat3',
        messages: arr3
    }
];

class Chat extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            currentChat: 0,
            data: chats
        };
        this.onChatSwitch = this.onChatSwitch.bind(this);
        this.onAddComment = this.onAddComment.bind(this);
        
    }
    
    onAddComment(newChatMessages) {
        var newArr = _.cloneDeep(this.state.data);
        newArr[this.state.currentChat].messages = newChatMessages;
        this.setState({data: newArr});

    }

    onChatSwitch(id) {
        this.setState({currentChat: id});
    }
    
    render() {
        return (
          <div className="container">  
            <ChatSwitcher onSwitch={this.onChatSwitch} />
            <CommentBox data={this.state.data[this.state.currentChat].messages} onAddComment={this.onAddComment} />
          </div>    
        );
    }
}

export default Chat;