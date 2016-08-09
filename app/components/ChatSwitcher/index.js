/**
 * Created by DMedzatiy on 09-Aug-16.
 */

import React from 'react';

class ChatSwitcher extends React.Component {
    constructor(props) {
        super(props);
        
        this.onClick1 = this.onClick1.bind(this);
        this.onClick2 = this.onClick2.bind(this);
        this.onClick3 = this.onClick3.bind(this);
    }
    
    onClick1(e) {
        e.preventDefault();

        this.props.onSwitch(0);
    }
onClick2(e) {
        e.preventDefault();

        this.props.onSwitch(1);
    }
onClick3(e) {
        e.preventDefault();
        this.props.onSwitch(2);
    }


    render() {
        return (
            <div className="btn-group" role="group" aria-label="...">
                <button type="button" className="btn btn-default" ref="0" onClick={this.onClick1}>Chat0</button>
                <button type="button" className="btn btn-default" ref="1" onClick={this.onClick2}>Chat1</button>
                <button type="button" className="btn btn-default" ref="2" onClick={this.onClick3}>Chat2</button>
            </div>
        );
    }
}

export default ChatSwitcher;