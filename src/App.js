import React, { Component } from 'react';
import Fuse from "fuse.js";

import { data as users_data } from './data/users.json';
import './App.css';

import { MainLoader } from "./components/MainLoader";
import { BodyWrapper } from "./components/BodyWrapper";
import { LeftArea } from "./components/LeftArea";
import { MainArea } from "./components/MainArea";
import { Contact } from "./components/Contact";

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
    };
    this.searchUsers = this.searchUsers.bind(this);
  }

  searchUsers(evt) {
    if (evt.target.value.trim() === "") {
      this.setState({ users: users_data });
      return;
    }
    const result = fuse.search(evt.target.value);
    this.setState({ users: result});
  }

  componentDidMount() {
    setTimeout(() => {
      console.log("Finish loading");
      this.setState({ isLoading: false });
    }, 18e2); // to css loading bar animation (css duration is 2s)
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
        <MainArea></MainArea>
      </BodyWrapper>
    );
  }

  renderContacts() {
    return this.state.users.map(user => <Contact key={user.avatar} {...user} />)
  }
}

export default App;
