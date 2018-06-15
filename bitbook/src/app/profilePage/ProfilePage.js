import React from 'react';
import ProfileItem from './ProfileItem';
import FetchData from '../../service/ServiceGetData';

class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profilePosts: {},
        };
    }

    componentDidMount() {
        FetchData.getUsers().then(profilePosts => {
            this.setState({ profilePosts: profilePosts });

        });
    }

    render() {

        return (<div className='feedPosts'>
            <ProfileItem profile={this.state.profilePosts
            } />
        </ div>)
    }
}






export default ProfilePage