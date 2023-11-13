import React, { Component } from "react";
import { getRandomNumber } from "./Helper/utils";
import { registerTicket } from "./Helper/actions";
import Lottery from "./components/Lottery";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winningNumber: getRandomNumber(),
      tickets: [],
      remaningTickets: 5,
      finished: false
    };

    this.registerTicket = registerTicket.bind(this);
  }

  renderApp() {
    const {tickets, remaningTickets} = this.state;
    const actions = {};
    actions.registerTicket = this.registerTicket;
    return (
      <Lottery
        actions={actions}
        tickets = {tickets}
        remaningTickets={remaningTickets}
      />
    )
  }

  render() {
    console.log(this.state.tickets);
    return (
      <div className="App">
        {this.renderApp()}
      </div>
    )
  }
}

export default App;