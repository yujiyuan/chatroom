import React from "react";
import "./App.scss";
import Message from "./components/Message/Message";
import MessageItem from "./components/MessageItem/MessageItem";

const { System, Text, Picture } = MessageItem;
const MESSAGE_TYPE = {
  system: System,
  text: Text,
  picture: Picture
};
const data = [
  {
    type: "system",
    label: "张三加入群聊"
  },
  {
    type: "text",
    label: "在吗？",
    userName: "张三"
  },
  {
    type: "system",
    label: "张三撤回一条消息",
    userName: ""
  },
  {
    type: "picture",
    label: "",
    userName: "李四",
    imageUrl:
      "https://up.enterdesk.com/edpic/5a/c6/ce/5ac6ceec886be0c20b10a1ba5765ec47.jpg"
  },
  {
    type: "text",
    label: "哈哈哈哈哈",
    userName: "王五",
    isSelf: true
  }
];
function App() {
  return (
    <div className="App">
      <Message types={MESSAGE_TYPE} data={data} />
    </div>
  );
}
export default App;
