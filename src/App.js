import React from 'react';
import nanoid from "nanoid";
import './App.scss';
import Messages from './components/Messages/Messages';

class App extends React.Component {
  state = {
    message: '',
    userId: "1",
    userName: "非余",
    dataSource:[]
  }
  // 监控input变化
  handleChange = (e) => {
    this.setState({ message: e.target.value })
  }
  // 点击提交
  handleClick = (e) => {
    e.preventDefault();
    this.sendMessage()
  }
  // 发送聊天信息
  sendMessage = (e) => {
    const {message,dataSource,userId,userName} = this.state;
    if (message) {
      const obj = {
        msgType: "user", 
        userId,
        userName,
        msgId:nanoid(),
        time:this.generateTime(),
        content: message
      }
      const newDataSource = [...dataSource,obj]
      // 发送消息后清空输入框
      this.setState({ dataSource:newDataSource,message: '' })
    }
    return false
  }
  
  // 生成'hh-mm'格式的时间
    generateTime() {
      const date = new Date();
        let hour = date.getHours(),
            minute = date.getMinutes();
        hour = (hour===0) ? '00' : hour;
        minute = (minute<10) ? '0' + minute : minute;
        return hour + ':' + minute;
    }
  render () {
    return (
      <div className="App">
        <Messages selfId="1"
          dataSource={this.state.dataSource}
        />
        <div className="input-box">
          <div className="input">
            <input type="text"
              maxLength="140"
              placeholder="按回车提交"
              value={this.state.message}
              onKeyPress={this.handleKeyPress}
              onChange={this.handleChange} />
          </div>
          <div className="button">
            <button type="button" onClick={this.handleClick}>提交</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
