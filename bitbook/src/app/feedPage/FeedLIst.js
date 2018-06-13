import React from 'react';
import FetchData from "../../service/ServiceGetData"
import FeedButton from './FeedButton'

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

