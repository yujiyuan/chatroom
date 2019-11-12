import React from "react";
/**
 * 系统消息
 * @param {string} label ---系统信息
 */
const System = ({ label }) => {
  return (
    <div className="system-message">
      <span>{label}</span>
    </div>
  );
};

export default System;
