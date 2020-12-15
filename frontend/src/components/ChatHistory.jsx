import React, { Component } from "react";
import "../css/ChatHistory.css";
import Message from "./Message";

class ChatHistory extends Component {
  constructor(props) {
    super(props);
    this.chatRef = React.createRef();
  }

  componentDidUpdate() {
    let el = this.chatRef.current;
    if (el.scrollTop + el.offsetHeight + 61 === el.scrollHeight) {
      el.scrollTop = el.scrollHeight;
    }
  }

  render() {
    const messages = this.props.chatHistory.map(msg => <Message message={msg.data} />);
    return (
      <div ref={this.chatRef} className="ChatHistory">
        <h2>Chat:</h2>
        {messages}
      </div>
    );
  }
}

export default ChatHistory;