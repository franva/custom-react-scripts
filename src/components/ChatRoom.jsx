import React, { Component } from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import autobind from "autobind-decorator";

@observer
class ChatRoom extends Component {

    @observable
    messages = [];
    
    @observable
    newMessage = '';

    @autobind
    addNewMessage(){
        console.log("hey");
        this.messages.push(this.newMessage);
        this.newMessage = '';
    }

    @autobind
    updatenewMessage(){
        this.newMessage = this.textInput.value;
    }

    @autobind
    handleKeyUp(e){
        if(e.keyCode === 13){
            this.addNewMessage();
        }
    }

    @autobind
    renderMessage(msg){
        return (
            <li key={msg}>{msg}</li>
        );
    }
    
    render() {
        return (
            <div>
                <div className="inputMsg">
                         <input 
                            type="text" 
                            ref={(input) => {this.textInput = input;}} 
                            onChange={this.updatenewMessage} 
                            onKeyUp={this.handleKeyUp}
                            value={this.newMessage}/>
                        <input 
                            type="button"
                            onClick={this.addNewMessage} value="Send" />
                </div>     
                <ul>
                    {this.messages.map(m => this.renderMessage(m))}
                </ul>
            </div>
        );
    }
}

export default ChatRoom;