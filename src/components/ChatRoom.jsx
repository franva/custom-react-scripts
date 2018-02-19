import React, { Component } from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

@observer
class ChatRoom extends Component {

    @observable
    messages = [];
    
    @observable
    newMessage = '';

    @action
    addNewMessage(){
        this.messages.push(this.newMessage);
        this.newMessage = '';
    }

    @observer
    renderMessage(msg){
        return (
            <li>{msg}</li>
        );
    }

    render() {
        return (
            <div>
                <div className="inputMsg">
                    <form action="addNewMessage">
                        <input type="text" value={this.newMessage}/>
                    </form>
                </div>     
                <ul>
                    {this.messages.map(m => this.renderMessage(m))}
                </ul>
            </div>
        );
    }
}

export default ChatRoom;