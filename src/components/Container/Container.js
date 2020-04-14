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
            status: {},
            gender: {},
        };
        this.page = 1;
        this.isFreeFilters = true;
        this.heightForUpdList = 1000;
    }

    componentDidMount() {
        this.setList();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.isFreeFilters = Object.values(this.activeFilters).every(
            (filter) => filter === '' || Object.keys(filter).length === 0
        );

        this.heightForUpdList = this.list.clientHeight - window.pageYOffset;

        if (this.heightForUpdList < 805 && this.isFreeFilters) {
            this.setList(this.page++);
        }
        // console.log(this.list.clientHeight - window.pageYOffset);
        // console.log(this.list.clientHeight);
        // console.log(window.pageYOffset);
    };

    async setList(page) {
        const list = await getDataFromApi(page);
        this.setState({ list: [...this.state.list, ...list] });
    }

    sortByName = (e) => {
        e.stopPropagation();

        const name = e.target.value.toLowerCase();
        this.activeFilters.name = name;
        this.applyFilters();
    };

    sortByDesc = (e) => {
        e.stopPropagation();
        this.activeFilters.sort = 'desc';
        this.applyFilters();
    };

    sortByAsc = (e) => {
        e.stopPropagation();
        this.activeFilters.sort = 'asc';
        this.applyFilters();
    };

    sortByStatus = (e) => {
        e.stopPropagation();
        const { value, checked } = e.target;

        if (this.activeFilters.status[value] === undefined) {
            this.activeFilters.status[value] = checked;
        } else {
            delete this.activeFilters.status[value];
        }

        this.applyFilters();
    };

    sortByGender = (e) => {
        e.stopPropagation();
        const { value, checked } = e.target;

        if (this.activeFilters.gender[value] === undefined) {
            this.activeFilters.gender[value] = checked;
        } else {
            delete this.activeFilters.gender[value];
        }

        this.applyFilters();
    };

    resetFilters = (e) => {
        e.stopPropagation();
        this.activeFilters = {
            name: '',
            sort: '',
            status: {},
            gender: {},
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

        if (Object.keys(status).length > 0) {
            sortedList = sortedList.filter((item) =>
                Object.keys(status).includes(item.status)
            );
        }

        if (Object.keys(gender).length > 0) {
            sortedList = sortedList.filter((item) =>
                Object.keys(gender).includes(item.gender)
            );
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
                        activeFilters={this.activeFilters}
                    />
                    <CardList
                        ref={(el) => {
                            this.list = el;
                        }}
                        cards={sortedList === null ? list : sortedList}
                    />
                </div>
            </div>
        );
    }
}

export default App;
