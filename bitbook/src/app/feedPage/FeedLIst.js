import React from 'react';
import FetchData from "../../service/ServiceGetData"
<<<<<<< HEAD
import FeedButton from './FeedButton'

class FeedList extends React.Component {
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
            {this.state.posts.map(post => {
                if (post.type === 'video') {
                    return (<div className="postBody">
                        <iframe src={post.videoUrl} />
                        <div>
                            <p className="card-text">Video post</p>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>)
                }

                else if (post.type === 'text') {
                    return (<div className="postBody">
                        {post.text}
                        <br />
                        <br />
                        <br />
                        <p className="card-text">Text post</p>
                        <a href="#" className="card-link">Another link</a>
                    </div>)
                }
                else if (post.type === 'image') {
                    return (<div className="postBody">
                        <img src={post.imageUrl} />
                        <p className="card-text">Image Post</p>
                        <a href="#" className="card-link">Another link</a>
                    </div>)
                }
            })

            }
<<<<<<< HEAD
        </div>)

=======
            <FeedButton  />
        </ div>)
>>>>>>> add button
    }
}
=======

const FeedList = (props) => {

    return (<div className='feedPosts'>
        {props.posts.map(post => {
            if (post.type === 'video') {
                return (<iframe width="854" height="400" src={post.videoUrl} allow="autoplay; encrypted-media" allowfullscreen></iframe>)
            }

            else if (post.type === 'text') {
                return (<div>{post.text}</div>)
            }
            else if (post.type === 'image') {
                return (<div> <img src={post.imageUrl} width="854" height="400" /></div>)
            }
        })
        }
    
    </ div>)
}

export default FeedList;


>>>>>>> change make MainFeed and add FeedList into that

export default FeedList;



