import React, {Component} from "react";
import "./style.scss";
import {FilterList} from "../FilterList"
import {CardList} from "../CardList"

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Friend App ReactJS</h1>
                </header>
                <div className="container">
                    <FilterList/>
                    <CardList/>
                </div>
            </div>
        );
    }
}

export default App;
