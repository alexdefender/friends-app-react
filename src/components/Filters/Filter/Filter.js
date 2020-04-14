import React from 'react';
import './Filter.scss';

const Filter = ({ name, values, handleChange }) => {
    const renderFilter = values.map((status, i) => (
        <label key={i}>
            <input
                type='radio'
                value={status}
                name={name}
                onChange={handleChange}
            />
            <span>{status}</span>
        </label>
    ));

    return (
        <div className='filter'>
            <div>
                <strong>{name}:</strong>
            </div>
            {renderFilter}
        </div>
    );
};

export default Filter;
