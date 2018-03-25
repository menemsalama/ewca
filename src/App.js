import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { MainLoader } from "./components/MainLoader";
import { BodyWrapper } from "./components/BodyWrapper";

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
    if (this.state.isLoading) {
        return <MainLoader />
    }

    return (
      <BodyWrapper>
        test {JSON.stringify(this.state, null, 2)}
      </BodyWrapper>
    );
  }
}

export default App;
