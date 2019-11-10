import React, { Component } from 'react'
import PropTypes from "props-types";

//componetns
import MessageItem from "./MessageItem"

class Messages extends Component {
    renderMessageList = (dataSource)=>{
        const {selfId} = this.props;
        const messageList = dataSource.map((item) =>{
            return <MessageItem key={item.msgId} msgType= {item.msgType} username={item.userName} isSelf={selfId===item.uid} time={item.time}></MessageItem>
        })
        return messageList;
    }
    render(){
        const {className,style,dataSource=[]} = this.props;
        return (
            <div className={`messgae-container ${className}`} style={style}>
                <div className="message-list-container">
                    {
                        this.renderMessageList(dataSource)
                    }
                </div>
            </div>
        )
    }
}

export default Messages;