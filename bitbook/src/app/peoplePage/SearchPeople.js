import React from 'react';

const SearchPeople = (props) => {

    return (
        <div>
            <input type='text' value={props.value} onChange={props.onChange} />
        </div>
    )
}

export default SearchPeople



