import React from 'react';

const SearchPeople = (props) => {

    return (
        <div className= "peopleInput">
            <input type='text' value={props.value} onChange={props.onChange} />
        </div>
    )
}

export default SearchPeople



