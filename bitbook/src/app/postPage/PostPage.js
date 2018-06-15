import React from 'react';
import fetchData from "../../service/ServiceGetData";

class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},

        };
    }



    componentDidMount() {
        const type = this.props.match.params.type;
        const id = this.props.match.params.id;
        fetchData.getPost(type, id).then(post => {
            this.setState({ post: post })
        })

    }

    pagePost() {
        const pState = this.state.post
        if (pState.type == 'video') { return <div className="frameCard">  <iframe src={pState.videoUrl} /></div> }
        else if (pState.type == 'image') { return <div className="imgCard"> <img src={pState.imageUrl} /></div> }
        else if (pState.type == 'text') { return <div className="txtCard">{pState.text}</div> }
    }

    render() {
        return (<div>{this.pagePost()}</div>
        )
    }
}

export default PostPage