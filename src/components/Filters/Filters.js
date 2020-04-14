import React from 'react';
import './Filters.scss';
import { Filter } from './Filter';
import { FilterBtn } from './FilterBtn';
import { Search } from './Search';

const statusValues = ['Alive', 'Dead', 'unknown'];
const genderValues = ['Male', 'Female', 'unknown'];

const Filters = ({
    sortByName,
    sortByDesc,
    sortByAsc,
    sortByStatus,
    sortByGender,
    resetFilters,
}) => {
    return (
        <section className='filters'>
            <Search handleChange={sortByName} />
            <div className='sort-wrapper'>
                <FilterBtn name='Asc' value='asc' handleClick={sortByAsc} />
                <FilterBtn name='Desc' value='desc' handleClick={sortByDesc} />
            </div>
            <Filter
                name='Status'
                values={statusValues}
                handleChange={sortByStatus}
            />
            <Filter
                name='Gender'
                values={genderValues}
                handleChange={sortByGender}
            />
            <FilterBtn
                name='Reset Filters'
                value='reset'
                handleClick={resetFilters}
            />
        </section>
    );
};

export default Filters;
