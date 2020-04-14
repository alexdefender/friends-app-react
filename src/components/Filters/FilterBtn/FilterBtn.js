import React from 'react';
import './FilterBtn.scss';

const FilterBtn = ({ name, value, handleClick }) => {
    return (
        <button className='filter-btn' {...{ value }} onClick={handleClick}>
            {name}
        </button>
    );
};

export default FilterBtn;
