import React from 'react';


const PeopleItem = (props) => {

    return (

        <div>
            <p>{props.user.name}</p>
            <img src={props.user.avatarUrl} />
            <p>{props.user.aboutShort}</p>
            <p>{props.user.lastPostDate}</p>
        </div>

    )
}


export default PeopleItem;