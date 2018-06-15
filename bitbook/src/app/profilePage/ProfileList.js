import React from 'react';

const ProfileList = (props) => {
    return (

    <div>
        <img className="profilePic" src={props.profile.avatarUrl} />
        <h4 className="profileName">{props.profile.name}</h4>
        <p>{props.profile.about}</p> 

        <button type="button" class="btn">
        <span class="badge badge-pill">{props.profile.postsCount} Posts</span>
        </button> 
        
        <button type="button" class="btn">
        <span class="badge badge-pill">{props.profile.commentsCount} Comments</span>
        </button>
    </div>)
}



export default ProfileList;



