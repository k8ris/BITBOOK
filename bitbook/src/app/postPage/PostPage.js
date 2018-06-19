import React from 'react';
import fetchData from "../../service/ServiceGetData";
import Comments from './Comments'


class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            comments: [],
            users: []

        };
    }

    componentDidMount() {
        const type = this.props.match.params.type;
        const id = this.props.match.params.id;

        fetchData.getPost(type, id).then(post => {
            this.setState({ post: post })
        })

        fetchData.GetComments(id).then(comments => {
            this.setState({ comments: comments })
        })
        fetchData.getUsers(id).then(users => {
            this.setState({ users: users })
        })

    }

    pagePost() {
        const pState = this.state.post
        if (pState.type === 'video') { return <div className="frameCard">  <iframe src={pState.videoUrl} title='yt video' /></div> }
        else if (pState.type === 'image') { return <div className="imgCard"> <img src={pState.imageUrl} alt='img' /></div> }
        else if (pState.type === 'text') { return <div className="txtCard">{pState.text}</div> }
    }

    render() {

        return (
            <div>
                <div>{this.pagePost()}</div>
                <div>
                    <div><img src={this.state.users.avatarUrl} alt='img' /></div>
                    <Comments comments={this.state.comments} />
                </div>
            </div>
        )
    }
}

export default PostPage