import React from 'react';
import FetchData from "../../service/ServiceGetData";
import FeedLIst from './FeedLIst';
import Modals from './Modals'

class FeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        FetchData.getPosts().then(posts => {
            this.setState({ posts: posts });
        });
    }

    render() {

        return (

            <div className='feedPosts'>
                <Modals />
                <FeedLIst set={this.state.posts} posts={this.state.posts} />
            </ div>)
    }
}

export default FeedPage;