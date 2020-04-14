import React from 'react';
import './Search.scss';

const Search = ({ handleChange }) => {
    return (
        <div className='search'>
            <input
                type='search'
                placeholder='Search...'
                onChange={handleChange}
            />
        </div>
    );
};

export default Search;
