import React, { Component } from 'react';
import Fuse from "fuse.js";

import { data as users_data } from './data/users.json';
import { generateChatLog } from './data/chatlog.js';
import './App.css';

import { MainLoader } from "./components/MainLoader";
import { BodyWrapper } from "./components/BodyWrapper";
import { LeftArea } from "./components/LeftArea";
import { MainArea } from "./components/MainArea";
import { Contact } from "./components/Contact";
import { Chat } from "./components/Chat";

const options = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    "first_name",
    "last_name"
  ]
};
const fuse = new Fuse(users_data, options);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: users_data,
      currentChatId: null,
      chatlog: [],
    };
    this.searchUsers = this.searchUsers.bind(this);
    this.openChat = this.openChat.bind(this);
    this.onNewMessage = this.onNewMessage.bind(this);
  }

  searchUsers(evt) {
    if (evt.target.value.trim() === "") {
      this.setState({ users: users_data });
      return;
    }
    const result = fuse.search(evt.target.value);
    this.setState({ users: result});
  }

  openChat(evt) {
    const idx = parseInt(evt.currentTarget.id, 10);
    const user = this.state.users[this.state.currentChatId];
    const chatlog = generateChatLog(user);
    this.setState({ currentChatId: idx, chatlog });
  }

  onNewMessage(evt) {
    if (evt.keyCode === 13) {
      const newMessage = {
        owner: {id: 13},
        message: evt.target.value,
      };
      const log = this.state.chatlog.splice(0);
      log.push(newMessage)
      evt.target.value = "";
      this.setState({chatlog: log});
    }
  }

  componentDidMount() {
    setTimeout(() => {
      console.log("Finish loading");
      this.setState({ isLoading: false });
    }, 18e2); // to css loading bar animation (css duration is 2s)
  }

  componentDidUpdate() {
    if (this.chatBottom) {
      this.chatBottom.scrollIntoView();
    }
  }

  render() {
    if (this.state.isLoading) {
      return <MainLoader />
    }

    return (
      <BodyWrapper>
        <LeftArea searchUsers={this.searchUsers}>
          {this.renderContacts()}
        </LeftArea>
        <MainArea>
          {this.renderCurrentChat()}
        </MainArea>
      </BodyWrapper>
    );
  }

  renderContacts() {
    return this.state.users.map((user, idx) => <Contact key={idx} openChat={this.openChat} idx={idx} {...user} />)
  }

  renderCurrentChat() {
    if (this.state.currentChatId === null || this.state.chatlog.length === 0) {
      return null;
    }
    const user = this.state.users[this.state.currentChatId];
    return (
      <Chat user={user} onNewMessage={this.onNewMessage}>
        {this.state.chatlog.map(({ message, owner }, idx) => (
          <div key={idx} className={`message-${ owner && owner.id === 13 ? "right" : "left"}`}>
            <div className="message-content">{message}</div>
          </div>
        ))}
        <div id="chat-bottom" ref={el => this.chatBottom = el}></div>
      </Chat>
    )
  }
}

export default App;
