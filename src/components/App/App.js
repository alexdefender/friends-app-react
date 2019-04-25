import React, {Component} from "react";
import "./style.scss";
import {FilterList} from "../FilterList"
import {CardList} from "../CardList"
import DataService from "../../services/DataService"

class App extends Component {
    constructor(props) {
        super(props);
        this.getData();
    }

    getData = () => {
        DataService.getDataFromApi().then(data => {
            this.setState(data.results);
        })
    }

    render() {
        // console.log(this.state);
        return (
            <div>
                <header>
                    <h1>Friend App ReactJS</h1>
                </header>
                <div className="container">
                    <FilterList/>
                    <CardList cards={this.state}/>
                </div>
            </div>
        );
    }
}

export default App;
