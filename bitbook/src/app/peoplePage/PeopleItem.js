import React from 'react';


const PeopleItem = (props) => {

    return (

        <div className="peopleCard row">
            <img className="card-img-top" src={props.user.avatarUrl} />
            <div className="card-body">
                <h2 className="card-title">{props.user.name}</h2>
                <p className="card-text">{props.user.aboutShort}</p>
                <p className="postCard"><small class="text-muted">Last post at</small></p>
                <p className="postCard"><small class="text-muted">{props.user.lastPostDate}</small></p>
            </div>
        </div>

    )
}

export default PeopleItem;




{/* <div>
    <img src={props.user.avatarUrl} />
    <p>{props.user.name}</p>
    <p>{props.user.aboutShort}</p>
    <p>{props.user.lastPostDate}</p>
</div> */}





