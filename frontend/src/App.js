import React, { Component } from "react";
import { connect, sendMsg } from "./api/connections";
import Header from "./components/Header"
import ChatHistory from "./components/ChatHistory"
import ChatInput from "./components/ChatInput"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New message")
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state)
    });

  }

  send(event) {
    if(event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory}/>
        <ChatInput send={this.send} />
      </div>
    );
  }
}

export default App;