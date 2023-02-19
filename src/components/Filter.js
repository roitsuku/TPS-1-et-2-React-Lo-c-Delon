import React from 'react';

const Filter = (props) => {

    function handleEvent(event) {
        props.out = ['test'];
    }

    return (
        <div>
            <select>
                {props.filters.map(prop =>
                    <option onChange={handleEvent}>{prop}</option>
                )}
            </select>
        </div>
    );
};

export default Filter;