import React from 'react';
import FetchData from "../../service/ServiceGetData";

class PeoplePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            // postVideo: {}
        };
    }



    // componentDidMount() {
    //     const postId = ''
    //     FetchData.getPost(postId).then(post => {
    //         this.setState({ post: post })
    //     })

    // }
    // // this.setState({ postVideo: true })
    // pagePost() {
    //     const pState = this.state.post
    //     if (pState.type == 'video') { return <div>  <iframe src={pState.videoUrl} /> </div> }
    //     else if (pState.type == 'image') { return <div> <img src={pState.imageUrl} /></div> }
    //     else if (pState.type == 'text') { return <div>{pState.text}</div> }
    // }

    render() {
        return (<div></div>
        )
    }
}





export default PeoplePage

{/* <div>{if(this.state.post.type === 'video'){return (nn)}}</div> */ }
// 
// if ( a == b){return(jjj)}