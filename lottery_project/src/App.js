import React, { Component } from "react";
import { getRandomNumber } from "./Helper/utils";
import { registerTicket, removeTicket, finish, reset } from "./Helper/actions";
import Lottery from "./components/Lottery";
import Final from "./components/Final";
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
    this.removeTicket = removeTicket.bind(this);
    this.finish = finish.bind(this);
    this.reset = reset.bind(this);
  }

  renderApp() {
    const { tickets, remaningTickets, finished, winningNumber } = this.state;
    const actions = {};

    if (finished) {
      actions.reset = this.reset;
      return <Final
        actions={actions}
        tickets={tickets}
        winningNumber={winningNumber}
      />
    }

    actions.registerTicket = this.registerTicket;
    actions.removeTicket = this.removeTicket;
    actions.finish = this.finish;

    return (
      <Lottery
        actions={actions}
        tickets={tickets}
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