import React, { Component } from "react";
import LotteryTicket from "./LotteryTicket";

class Lottery extends Component {
    renderButton() {
        const { remainingTickets, actions } = this.props;
        if (remainingTickets > 0) {
            return <button onClick={actions.registerTicket}>Изтегли число</button>
        }
    }

    renderTickets() {
        const { tickets, actions } = this.props;
        const lotteryTicketsActions = { removeTicket: actions.removeTicket };
        const lotteryTickets = tickets.map((ticket, index) => {
            return (
                <LotteryTicket
                    actions={lotteryTicketsActions}
                    color={ticket.color}
                    number={ticket.number}
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
                <h2>ЛОТАРИЯ 5 от 49</h2>
                {this.renderButton()}
                <br />
                <small>оставаши: <b>{this.props.remainingTickets}</b></small>
                <br />
                <hr />
                {this.renderTickets()}
            </>
        )
    }
}

export default Lottery;