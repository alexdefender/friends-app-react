import React, {Component} from "react";
import "./style.scss";
import {FilterList} from "../FilterList"
import {CardList} from "../CardList"
import {getDataFromApi} from "../../services/api"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    async componentDidMount() {
        const listFromApi = await getDataFromApi();
        const list = listFromApi.map(item => {
            return {
                name: item.name,
                image: item.image,
                gender: item.gender,
                location: item.location.name,
                species: item.species,
                status: item.status
            }
        })
        // const {name, image, gender, location, species, status} = this.props.card;

        console.log(list);
        this.setState({list});
    }


    sort = (e) => {

    }


    render() {
        const {list} = this.state;

        // console.log(list[1]);

        return (
            <div>
                <header>
                    <h1>Friend App ReactJS</h1>
                </header>
                <div className="container">
                    <FilterList sort={this.sort}/>
                    <CardList cards={list}/>
                </div>
            </div>
        );
    }
}

export default App;
