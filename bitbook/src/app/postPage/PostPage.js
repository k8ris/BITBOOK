import React from 'react';
import fetchData from "../../service/ServiceGetData";
import Comments from './Comments'
import SendComment from './SendComment'

class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            comments: [],
            user: [],
           
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
        // this.state.comments.map(comment => { 
        // const userId = comment.authorId 

        // fetchData.GetUser(userId).then(user => {
            
        // this.setState({ user: user })
        // })})
        // fetchData.GetUser(userId).then(user => {
            
        // this.setState({ user: user })
        // })
    }
    
    loadComment = () => { 
        const id = this.props.match.params.id;
        fetchData.GetComments(id).then(comments => {
            this.setState({ comments: comments })
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
                <div> <SendComment loadComment={this.loadComment}/></div>
                <div>
                    <Comments comments={this.state.comments} url={this.state.user.avatarUrl}  />
                </div>
            </div>
        )
    }
}

export default PostPage



{/* <div><img src={this.state.users.avatarUrl} alt='img' /></div> */ }