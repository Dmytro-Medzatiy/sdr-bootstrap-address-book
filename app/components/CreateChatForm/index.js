/**
 * Created by DMedzatiy on 12-Aug-16.
 */

import React from 'react';
import Input from 'components/Input';

class CreateChatForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const newName = this.refs['newChatName'].getValue().trim();
        
        if (!this.props.checkNewChatName(newName)) {
            this.setState({status: "Oops, this name is in use, try something else"}); 
        }
        else {
            this.setState({status: ""});
            this.refs['newChatName'].setValue("");
            this.props.onCreateNewChat(newName);
        };
        
    }
    
    render() {
        const styleSpan = {
            backgroundColor:'#2e6da4',
            color:'white',
            borderColor:'white'
        }
        return (
            <div>
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <Input ref="newChatName" placeholder="New channel's name" type="text" className="form-control" />
                    <span className="input-group-addon" style={styleSpan}>
                        <Input type="submit" value="Add new channel"/>
                    </span>
                </div>
            </form>
            <label style={{color:"red"}}>{this.state.status}</label>
            </div>

        )
    }
}

export default CreateChatForm;