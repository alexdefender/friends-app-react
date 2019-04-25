import React, {Component} from "react";
import "./style.scss";

class CardItem extends Component {

    render() {
        console.log(this.props.card);

        const {name, image} = this.props.card;
        return (
            <section className="user-card">
                <h3 className="name">{name}</h3>
                <img src={image} alt=""/>
                <ul className="user-card__info">
                    <li>Some Info</li>
                </ul>
            </section>
        );
    }
}

export default CardItem;
