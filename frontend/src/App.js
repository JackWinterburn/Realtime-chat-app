import React, { Component } from "react";
import { connect, sendMsg } from "./api/connections";
import Header from "./components/Header"
import ChatHistory from "./components/ChatHistory"
import ChatInput from "./components/ChatInput"
import "./css/App.css"

export const UUID = ((Math.random() + Math.random()) * Math.random()).toString()

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
      this.setState(() => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
    });

  }

  send(event) {
    if(event.keyCode === 13) {
      let msg = event.target.value
      sendMsg(`${msg} #${UUID}`);
      event.target.value = "";
    }
  }

  render() {    
    return (
      <div className="App">
        <div>
          <Header />
          <ChatHistory chatHistory={this.state.chatHistory}/>
        </div>
        <div className="chat-wrapper">
          <ChatInput send={this.send} />
        </div>
      </div>
    );
  }
}

export default App;