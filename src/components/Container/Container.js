import React, { Component } from 'react';
import './Container.scss';
import { Filters } from '../Filters';
import { CardList } from '../CardList';
import { getDataFromApi } from '../../utils/getDataFromApi';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            sortedList: null,
        };
        this.activeFilters = {
            name: '',
            sort: '',
            status: '',
            gender: '',
        };
    }

    componentDidMount() {
        this.setList();
    }

    async setList() {
        const list = await getDataFromApi();
        this.setState({ list });
    }

    sortByName = (e) => {
        e.stopPropagation();

        const name = e.target.value.toLowerCase();
        this.activeFilters = { ...this.activeFilters, name };
        this.applyFilters();
    };

    sortByDesc = (e) => {
        e.stopPropagation();
        this.activeFilters = { ...this.activeFilters, sort: 'desc' };
        this.applyFilters();
    };

    sortByAsc = (e) => {
        e.stopPropagation();
        this.activeFilters = { ...this.activeFilters, sort: 'asc' };
        this.applyFilters();
    };

    sortByStatus = (e) => {
        e.stopPropagation();
        this.activeFilters = { ...this.activeFilters, status: e.target.value };
        this.applyFilters();
    };

    sortByGender = (e) => {
        e.stopPropagation();
        this.activeFilters = { ...this.activeFilters, gender: e.target.value };
        this.applyFilters();
    };

    resetFilters = (e) => {
        e.stopPropagation();
        this.activeFilters = {
            name: '',
            sort: '',
            status: '',
            gender: '',
        };
        this.applyFilters();
    };

    applyFilters = () => {
        const { list } = this.state;
        const { name, sort, status, gender } = this.activeFilters;
        let sortedList = JSON.parse(JSON.stringify(list));

        if (name !== '') {
            sortedList = sortedList.filter((item) =>
                item.name.toLowerCase().includes(name)
            );
        }
        if (sort !== 'desc') {
            sortedList.sort((nameA, nameB) => {
                if (nameA.name < nameB.name) return -1;
            });
        }

        if (sort !== 'asc') {
            sortedList.sort((nameA, nameB) => {
                if (nameA.name > nameB.name) return -1;
            });
        }

        if (status !== '') {
            sortedList = sortedList.filter((item) => item.status === status);
        }

        if (gender !== '') {
            sortedList = sortedList.filter((item) => item.gender === gender);
        }

        this.setState({ sortedList });
    };

    render() {
        const { list, sortedList } = this.state;

        return (
            <div className='container'>
                <header className='header'>
                    <h1 className='header__text'>Friends App React</h1>
                </header>
                <div className='content-wrap'>
                    <Filters
                        sortByName={this.sortByName}
                        sortByDesc={this.sortByDesc}
                        sortByAsc={this.sortByAsc}
                        sortFilter={this.sortFilter}
                        sortByStatus={this.sortByStatus}
                        sortByGender={this.sortByGender}
                        resetFilters={this.resetFilters}
                    />
                    <CardList cards={sortedList === null ? list : sortedList} />
                </div>
            </div>
        );
    }
}

export default App;
