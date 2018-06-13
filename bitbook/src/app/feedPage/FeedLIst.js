import React from 'react';
import FetchData from "../../service/ServiceGetData"


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
        </div>)

    }

}

export default FeedList;






//  <div class="card" style="width: 18rem;">
//   <img src={post.imageUrl} width="854" height="400" />
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>

//   <div class="card-body">
//    <p>Video Post</p>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// /* </div> */


{/* <div> <img src={post.imageUrl} width="854" height="400" /></div>) */ }

{/* <div>{post.text}</div> */ }
{/* <iframe width="854" height="400" src={post.videoUrl} allow="autoplay; encrypted-media" allowfullscreen></iframe> */ }