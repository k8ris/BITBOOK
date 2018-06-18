import React from 'react';
import fetchData from '../../service/ServiceGetData';
import PeopleItem from './PeopleItem';

class PeoplePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],

        };
    }

    componentDidMount() {
        fetchData.GetUsers()
            .then(users => this.setState({ users: users }))

    };



    render() {

        return (

            <div>
                {this.state.users.map(user => <PeopleItem user={user} />)}
            </div>
        )
    }
}





export default PeoplePage;

