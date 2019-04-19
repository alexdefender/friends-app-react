import React, {Component} from "react";
import "./style.scss";

class CardItem extends Component {
    render() {
        return (
            <section className="user-card">
                <h3 className="name">Alex</h3>
                <img src="" alt=""/>
                <ul className="user-card__info">
                    <li>Some Info</li>
                </ul>
            </section>
        );
    }
}

export default CardItem;
