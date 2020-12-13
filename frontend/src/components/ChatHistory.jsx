import React, { Component } from "react";
import "../css/ChatHistory.css";
import Message from "./Message";

class ChatHistory extends Component {
  render() {
    const messages = this.props.chatHistory.map(msg => <Message message={msg.data} />);

    return (
      <div className="ChatHistory">
        <h2>Chat:</h2>
        {messages}
      </div>
    );
  }
}

export default ChatHistory;