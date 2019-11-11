import React, { Component } from 'react'
// import PropTypes from "props-types";

//componetns
import MessageItem from "./MessageItem"

// style
import "./Messages.scss"
class Messages extends Component {
    renderMessageList = (dataSource)=>{
        const {selfId} = this.props;
        const messageList = dataSource.map((item) =>{
            return <MessageItem 
                key={item.msgId} 
                msgType= {item.msgType} 
                userName={item.userName} 
                isSelf={selfId===item.userId} 
                time={item.time}
                content={item.content}
            />
        })
        return messageList;
    }
    render(){
        const {className,style,dataSource=[]} = this.props;
        return (
            <div className={`message-container ${className}`} style={style}>
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