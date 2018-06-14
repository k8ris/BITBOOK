import React from 'react';
import FetchData from "../../service/ServiceGetData"
import FeedButton from './FeedButton'

const FeedList = (props) => {

    return (<div className='feedPosts'>
    {props.posts.map(post => {
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

export default FeedList;

