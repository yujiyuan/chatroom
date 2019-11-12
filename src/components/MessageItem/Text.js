import React from "react";

/**
 * 文本信息
 * @param {string} userName --- 用户名
 * @param {string} label --- 文本信息的内容
 * @param {boolean} isSelf --- 判断是否是自己发送的信息
 */
const Text = ({ userName, label, isSelf = false }) => {
  if (isSelf) {
    return (
      <div className="text text-right">
        <span className="self">{label}：</span>
        {userName}
      </div>
    );
  }
  return (
    <div className="text text-left">
      {userName}：<span className="other">{label}</span>
    </div>
  );
};

export default Text;
