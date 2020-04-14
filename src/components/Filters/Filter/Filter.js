import React from 'react';
import './Filter.scss';

const Filter = ({ header, values, checked, handleChange }) => {
    const renderFilter = values.map((name, i) => (
        <label key={i}>
            <input
                type='checkbox'
                value={name}
                checked={Object.keys(checked).includes(name)}
                onChange={handleChange}
            />
            <span>{name}</span>
        </label>
    ));

    return (
        <div className='filter'>
            <div>
                <strong>{header}:</strong>
            </div>
            {renderFilter}
        </div>
    );
};

export default Filter;
