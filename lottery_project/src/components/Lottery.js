import React, { Component } from "react";
import LotteryTicket from "./LotteryTicket";

class Lotter extends Component {
    renderButton() {
        const { remaningTickets, actions } = this.props;
        if (this.props.remaningTickets > 0) {
            return <button onClick={actions.registerTicket}>КУПИ БИЛЕТ</button>
        }
    }

    renderTickets() {
        const lotteryTickets = this.props.tickets.map((tickets, index) => {
            return (
                <LotteryTicket
                    color={tickets.color}
                    number={tickets.number}
                    index={index}
                    key={index}
                />
            );
        });

        return lotteryTickets;
    }

    render() {
        return (
            <>
                <h2>ЛОТАРИА 5 от 49</h2>
                {this.renderButton()}
                <br />
                <small>оставащи: {this.props.remaningTickets}</small>
                <br />
                <hr />
                {this.renderTickets()}
            </>
        );
    }
}

export default Lotter;