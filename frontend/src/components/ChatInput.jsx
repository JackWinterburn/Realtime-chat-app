import React, { Component } from "react";
import "../css/ChatInput.css";

class ChatInput extends Component {
  render() {
    return (
      <div className="ChatInput">
        <input onKeyDown={this.props.send} placeholder="Send a message"/>
      </div>
    );
  }
}

export default ChatInput;