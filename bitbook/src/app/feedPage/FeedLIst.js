import React from 'react';
import FetchData from "../../service/ServiceGetData"
import FeedButton from './FeedButton'
import { Link } from 'react-router-dom'
const FeedList = (props) => {

    return (<div className='feedPosts'>
        {props.posts.map(post => {
            if (post.type === 'video') {
                return (<Link to={`/${post.type}/${post.id}`}><div className="postBody">
                    <div className="frame">
                        <iframe src={post.videoUrl} />
                    </div>
                    <div className="cardStyle">
                        <p className="card-text">Video post</p>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div></Link>)
            }

            else if (post.type === 'text') {
                return (<Link to={`/${post.type}/${post.id}`}><div className="postBody">
                    {post.text}
                    <br />
                    <br />
                    <br />
                    <div className="cardStyleTxt">
                        <p className="card-text">Text post</p>
                        <a href="#" className="card-link">Another link</a>
                    </div></div></Link>)
            }
            else if (post.type === 'image') {
                return (<Link to={`/${post.type}/${post.id}`}><div className="postBody">
                    <img src={post.imageUrl} />
                    <div className="cardStyleImg">
                        <p className="card-text">Image Post</p>
                        <a href="#" className="card-link">Another link</a>
                    </div></div></Link>)
            }
        })

        }
    </div>)
}




export default FeedList;



