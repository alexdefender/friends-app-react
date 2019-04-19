import React, {Component} from "react";
import "./style.scss";
import {CardItem} from "./CardItem"

class CardList extends Component {
    render() {
        return (
            <section className="card-wrapper">
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
            </section>
        );
    }
}

export default CardList;
