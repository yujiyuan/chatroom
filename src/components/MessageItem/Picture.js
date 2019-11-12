import React from "react";

/**
 * 图片类型的message
 * @param {string} userName ---用户名
 * @param {string} imageUrl ---图片链接地址
 * @param {boolean} isSelf ---用于判断是否是自己发送的消息
 */
const Picture = ({ userName, imageUrl, isSelf = false }) => {
  if (isSelf) {
    return (
      <div className="text text-right">
        <img width={100} src={imageUrl} alt="" />:{userName}
      </div>
    );
  }
  return (
    <div className="text text-left">
      {userName}:
      <img width={100} src={imageUrl} alt="" />
    </div>
  );
};

export default Picture;
