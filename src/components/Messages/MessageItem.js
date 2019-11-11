import React from 'react';
import cl from "classnames";


/**
 * 
 * @param {string} msgType --消息类型
 * @param {string} userName --用户名
 * @param {boolean} isSelf --判断是否是自己发的消息
 * @param {string} time --发送的事件
 * @param {string} content --消息内容
 */
const MessageItem = (props) => {
    const renderMessageItem = () => {
        const { msgType, userName, isSelf, time,content } = props;
        switch (msgType) {
            case "system":
                return (
                    <div className="message-info system-messgae">
                        <p className="time">{time}</p>
                        {`${userName} 加入了群聊`}
                    </div>
                );
            default:
                return (
                    <div className={cl("message-info", {
                        "self": isSelf,
                        "other": !isSelf
                    })}>
                        <p className="time">
                            <span>{userName}</span>
                            <span className="time">{time}</span>
                        </p>
                        <p  className="message-content">
                            {content}
                        </p>
                    </div>
                )
        }
    }
    return (
        <React.Fragment>
            {
                renderMessageItem()
            }
        </React.Fragment>
    )
}

export default MessageItem;