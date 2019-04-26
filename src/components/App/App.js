import React, {Component} from "react";
import "./style.scss";
import {FilterList} from "../FilterList"
import {CardList} from "../CardList"
import {getDataFromApi} from "../../services/api"

const FILTER_STATUS = "status";
const FILTER_GENDER = "gender";
const ALL_CARDS = "All";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            sort: null,
        };
        this.status = "";
        this.gender = "";
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
        this.setState({list});
    }


    sortFilter = (e) => {
        const value = e.target.value;

        if (e.target.name === FILTER_STATUS) {
            this.status = value;
            if (value === ALL_CARDS) {
                this.status = "";
            }
        } else if (e.target.name === FILTER_GENDER) {
            this.gender = value;
            if (value === ALL_CARDS) {
                this.gender = "";
            }
        }

        let sort;

        if (this.status === "" && this.gender === "") {
            sort = this.state.list;
        } else if (this.status === "") {
            sort = this.state.list.filter(item => item.gender === this.gender);
        } else if (this.gender === "") {
            sort = this.state.list.filter(item => item.status === this.status);
        } else {
            sort = this.state.list.filter(item => item.status === this.status && item.gender === this.gender);
        }

        this.setState({sort});
    }


    sortDescAsc = (e) => {
        const sortDescAsc = this.state.sort === null ? this.state.list : this.state.sort

        sortDescAsc.sort((nameA, nameB) => {
            if (e.target.innerHTML === "Asc") {
                if (nameA.name < nameB.name) return -1;
            } else if (e.target.innerHTML === "Desc") {
                if (nameA.name > nameB.name) return -1;
            }
        })
        this.setState({sortDescAsc});

    }

    render() {
        const {list, sort} = this.state;

        return (
            <div>
                <header>
                    <h1>Friend App ReactJS</h1>
                </header>
                <div className="container">
                    <FilterList sortFilter={this.sortFilter} sortDescAsc={this.sortDescAsc}/>
                    <CardList cards={sort === null ? list : sort}/>
                </div>
            </div>
        );
    }
}

export default App;
