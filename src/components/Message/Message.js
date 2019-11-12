import React from "react";
// style
import "./Message.scss";

/**
 *
 * @param {Object} types --- 消息列表需要展示的消息类别
 * @param {Array} data --- 需要渲染的消息列表
 */
const Message = ({ types, data }) => {
  return (
    <div className="message-container">
      {data.map(item => {
        const Component = types[item.type];
        if (!Component) throw new Error(`No ${item.type} type found!`);
        return (
          <div className="message-info">
            <Component {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default Message;
