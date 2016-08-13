/**
 * Created by DMedzatiy on 10-Aug-16.
 */

import React, {PropTypes, Component} from 'react';
import ChatSwitcherElement from 'components/ChatSwitcherElement';
import Input from 'components/Input';

export default class ChatSwitcher extends Component {


    handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const title = this.inputForTitle.getValue().trim();
        if (!title) {
            alarm('Please enter title');
            return;
        }
        //const channel = Object.assign({}, this.props.editableComment, {author, text});
        this.props.onAddNewChanel(title);
    };

    render() {
        const {currentChat, chatList, onChatSwitch} = this.props;

        let chat;
        const chats = Object.keys(chatList).map((chatKey, index) => {
            chat = chatList[chatKey];
            return (
                <ChatSwitcherElement
                    key={index}
                    onChatSwitch={onChatSwitch}
                    chatKey={chatKey}>
                    {chat.name}
                </ChatSwitcherElement>
            );
        });

        const headerStyle = {
    			backgroundColor: '#4d394b',
    			color: '#fcfcfc',
    			marginBottom: '0px',
          marginTop: '0px'
    		};
        const listStyle = {
          listStyleType: 'none',
          margin: 0,
          padding: 0,
          width: 'strech',
          backgroundColor: '#f1f1f1'
        };

        const styleSpan = {
            backgroundColor:'#4d394b',
            color:'#fcfcfc',
            borderColor:'#4d394b'
        };

        return (
          <div>
            <h2 className="text-center text-uppercase"
                style={headerStyle}>
                Select channel
            </h2>
              <form className="commentForm"
                    onSubmit={this.handleSubmit} >
                  <div className="input-group">
                      <Input ref={me => this.inputForTitle = me}
                             placeholder="Title of channel"
                             type="text"
                             value={""}
                             className="form-control" />
                      <span className="input-group-addon" style={styleSpan}>
            <Input type="submit" value="Add" />
          </span>
                  </div>
              </form>
            <ul style={listStyle}>
              {chats}
            </ul>
          </div>
        );
    }

}

ChatSwitcher.propTypes = {
    currentChat: PropTypes.object.isRequired,
    chatList: PropTypes.object.isRequired,
    onChatSwitch: PropTypes.func.isRequired,
    onAddNewChanel: PropTypes.func.isRequired
};
