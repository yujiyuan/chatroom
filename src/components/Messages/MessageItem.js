import React from 'react';
import cl from "classnames";



const MessageItem = (props) => {
    const renderMessageItem = () => {
        const { msgType, username, isSelf, time } = props;
        switch (msgType) {
            case "system":
                return (
                    <div className="system-messgae">
                        {`${username} 加入了群聊`}
                    </div>
                );
            default:
                return (
                    <div className={cl("message-info", {
                        "self": isSelf,
                        "other": !isSelf
                    })}>
                        <p className="time">
                            <span>{username}</span>
                            <span>{time}</span>
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