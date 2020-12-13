import React, { Component } from "react";
import "../css/Message.scss";
import {UUID} from "../App"

class Message extends Component {
  constructor(props) {
    super(props);
    let temp = JSON.parse(this.props.message);
    this.state = {
      message: temp
    };
  }

  getMsgID(message) {
    if (message.includes("#")) {
      let idx = message.lastIndexOf("#")
      let msg = message.substring(0, idx)
      let msgID = message.substring(idx)
      msgID = msgID.substring(1)
      if (msgID === UUID) {
        let obj = {thisUserSentMsg: true, msg: msg}
        return obj
      } else {
        let obj = {thisUserSentMsg: false, msg: msg}
        return obj
      }
    } else {
      let obj = {thisUserSentMsg: null, msg: message}
      return obj
    }
  
  }

  render() {
      let {thisUserSentMsg, msg} = this.getMsgID(this.state.message.body)
      if (thisUserSentMsg) {
        return <div className="Message me">{msg}</div>;
      } else {
        return <div className="Message">{msg}</div>;
      }

    
  }
}

export default Message;