import React, { Component } from "react";
import { getRandomColor } from "../Helper/utils";

class Final extends Component {
    isWinning() {
        const { tickets, winningNumber } = this.props;

        for (const ticket of tickets) {
            if (ticket.number === winningNumber) {
                return true;
            }
        }
        return false;
    }
    renderWinning() {
        return (
            <>
                <h2>ЧЕСТИТО!!!</h2>
                <h3>ТИ СПЕЧЕЛИ 7 450 550лв.</h3>
                <p>Твоето късмелийско число беше: <b>{this.props.winningNumber}</b></p>
            </>
        )
    }

    renderTryAgain() {
        return (
            <>
                <h2>Опитай пак!</h2>
                <p>Печелившото число беше: <b>{this.props.winningNumber}</b></p>
            </>
        )
    }
    render() {
        return (
            <div style={{ backgroundColor: getRandomColor(), padding: 15 }}>
                {this.isWinning() ? this.renderWinning() : this.renderTryAgain()}
                <button onClick={this.props.actions.reset}>Ново теглене</button>
            </div>
        )
    }
}

export default Final;