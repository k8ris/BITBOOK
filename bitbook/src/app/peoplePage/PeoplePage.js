import React from 'react';
import fetchData from '../../service/ServiceGetData';
import PeopleList from './PeopleList';
import SearchPeople from './SearchPeople'


class PeoplePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            inputValue: ''
        };
    }

    componentDidMount() {
        fetchData.GetUsers()
            .then(users => this.setState({ users: users }))

    };

    handleChange = (event) => {
        this.setState({ inputValue: event.target.value })

    }

    render() {

        return (

            <div className="container">

                <SearchPeople value={this.state.inputValue} onChange={this.handleChange} />
                <PeopleList users={this.state.users} inputValue={this.state.inputValue} />

            </div>
        )
    }
}

export default PeoplePage;

// {this.state.users.map(user => <PeopleItem user={user} />)}