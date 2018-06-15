import React from 'react';
import FetchData from "../../service/ServiceGetData";
import FeedButton from './FeedButton';
import FeedList from './FeedList';
import Modals from './Modals'

class MainFeed extends React.Component {
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

        return (<div className='feedPosts'>
            <Modals />
            <FeedList posts={this.state.posts} />
        </ div>)
    }
}
export default MainFeed;