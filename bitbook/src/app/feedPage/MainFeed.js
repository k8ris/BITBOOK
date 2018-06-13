import React from 'react';
import FetchData from "../../service/ServiceGetData";
import FeedButton from './FeedButton';
import FeedList from './FeedList'

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
            <FeedList posts={this.state.posts} />
            <FeedButton />
        </ div>)
    }
}
export default MainFeed;