/**
 * Created by DMedzatiy on 10-Aug-16.
 */

import React from 'react';
import CreateChatForm from 'components/CreateChatForm';

export default class ChatSwitcher extends React.Component {
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.onCreateNewChannel = this.onCreateNewChannel.bind(this);
        this.checkName = this.checkName.bind(this);
    }

    onCreateNewChannel() {
        console.log('Let\'s create the new Channel');
    }

    handleOnClick(e) {
        e.preventDefault();
        this.props.onChatSwitch(e.currentTarget.dataset.id);

    }

    checkName(newName) {
        const { chatList } = this.props;
        if (chatList.map((x) => { return (x.name.toUpperCase())}).indexOf(newName.toUpperCase()) >= 0 ) {
            return (false);
        }
        else {
            return (true);
        }
    }

    render() {
        const { currentChat, chatList } = this.props;

        const chats = chatList.map((chat) => {
            if (chat.chatId==currentChat) {
                return (
                    <button className="btn btn-default" key={chat.chatId} disabled="true" >
                        {chat.name}
                    </button>
                )
            }
            else {
                return (
                    <button className="btn btn-default" key={chat.chatId} data-id={chat.chatId} onClick={this.handleOnClick}>
                        {chat.name}
                    </button>
                )
            }
        });
        const chatBoxStyle = {
            overflow: 'auto',
            border: '1px solid #ccc',
            marginBottom: '20px'
        };
        
        return (

            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Chose a channel</h3>
                </div>
                <div className="panel-body">
                    <div className="btn-group">
                        {chats}
                    </div>
                    <div style={{textAlign:"center", margin: "0px", padding: "0px"}}>
                         <h4>or</h4>
                    </div>
                    <div className="commentForm">                    
                        <CreateChatForm checkNewChatName={this.checkName} onCreateNewChat={this.props.onCreateNewChat} />
                    </div>
                </div>
            </div>

        );
    }
    
}


