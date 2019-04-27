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
            sort: undefined,
            searchFromInput: undefined
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

    searchFromInput = (e) => {
        const searchFromInput = this.state.list.filter(item => item.name.toLowerCase().includes(e.target.value));

        this.setState({sort: searchFromInput});
        this.setState({searchFromInput});
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

        const state = (this.state.searchFromInput !== undefined) ? this.state.searchFromInput : this.state.list;

        // console.log({state})
        let sort;

        if (this.status === "" && this.gender === "") {
            sort = this.state.searchFromInput;
        } else if (this.status === "") {
            sort = state.filter(item => item.gender === this.gender);
        } else if (this.gender === "") {
            sort = state.filter(item => item.status === this.status);
        } else {
            sort = state.filter(item => item.status === this.status && item.gender === this.gender);
        }
        console.log(sort)

        this.setState({sort});
    }


    render() {
        const {list, sort} = this.state;


        return (
            <div>
                <header>
                    <h1>Friend App ReactJS</h1>
                </header>
                <div className="container">
                    <FilterList searchFromInput={this.searchFromInput} sortDescAsc={this.sortDescAsc}
                                sortFilter={this.sortFilter}/>
                    <CardList cards={sort === undefined ? list : sort}/>
                </div>
            </div>
        );
    }
}

export default App;
