import React from 'react';

const ProfileItem = (props) => {

    return (

        <div>
            <img className="profilePic" src={props.profile.avatarUrl} alt='img' />
            <h4 className="profileName">{props.profile.name}</h4>
            <p>{props.profile.about}</p>

            <button type="button" class="profileBtn">
                <span class="badge badge-pill">{props.profile.postsCount} Posts</span>
            </button>

            <button type="button" class="profileBtn">
                <span class="badge badge-pill">{props.profile.commentsCount} Comments</span>
            </button>
        </div>)
}

export default ProfileItem;



