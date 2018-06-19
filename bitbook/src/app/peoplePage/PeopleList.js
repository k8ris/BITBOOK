import React from "react";
import PeopleItem from './PeopleItem';


const PeopleList = (props) => {

    return (
        props.users.filter((user) => {

            if (user.name.includes(props.inputValue)) {
                return (true)
            } else { return (false) }
        })
            .map(user => <PeopleItem user={user} />)
    )
}

export default PeopleList;