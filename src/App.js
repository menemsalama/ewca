import React, { Component } from 'react';
import { data as users_data } from './data/users.json';
import './App.css';

import { MainLoader } from "./components/MainLoader";
import { BodyWrapper } from "./components/BodyWrapper";
import { LeftArea } from "./components/LeftArea";
import { MainArea } from "./components/MainArea";
import { Contact } from "./components/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      console.log("Finish loading");
      this.setState({ isLoading: false });
    }, 18e2); // to css loading bar animation (css duration is 2s)
  }

  render() {
    console.log(users_data);
    if (this.state.isLoading) {
      return <MainLoader />
    }

    return (
      <BodyWrapper>
        <LeftArea>
          {this.renderContacts()}
        </LeftArea>
        <MainArea></MainArea>
      </BodyWrapper>
    );
  }

  renderContacts() {
    return users_data.map(user => <Contact {...user} />)
  }
}

export default App;
