import React, {Component} from "react";
import "./style.scss";
import {CardItem} from "./CardItem"

class CardList extends Component {
    render() {

        let arrCards = [];
        for (let i in this.props.cards) {
            arrCards.push(this.props.cards[i]);
        }

        return this.props.cards !== null ? (
            <div className="card-wrapper">

                {arrCards.map((card, i) => <CardItem key={i} card={card}/>)}
            </div>
        ) : "";
    }
}

export default CardList;
