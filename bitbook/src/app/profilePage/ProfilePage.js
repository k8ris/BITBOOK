import React from 'react';
import ProfileList from './ProfileList';
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
            <ProfileList profile={this.state.profilePosts
            } />
        </ div>)
    }
}






export default ProfilePage