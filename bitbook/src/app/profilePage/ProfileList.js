import React from 'react';

const ProfileList = (props) => {
    return (<div>
        <img src={props.profile.avatarUrl} />
        <p>{props.profile.name}</p>
        <p>{props.profile.about}</p>
        <p>{props.profile.commentsCount}</p>
        <p>{props.profile.postsCount}</p>


    </div>)
}



export default ProfileList;