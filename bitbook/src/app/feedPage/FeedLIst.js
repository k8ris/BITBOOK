import React from 'react';
import FetchData from "../../service/ServiceGetData"
import FeedButton from './FeedButton'
import { Link } from 'react-router-dom'
const FeedList = (props) => {

    return (<div className='feedPosts'>
        {props.posts.map(post => {
            if (post.type === 'video') {
                return (<Link to={`/Feed/${post.id}`}><div className="postBody">
                    <iframe src={post.videoUrl} />
                    <div>
                        <p className="card-text">Video post</p>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div></Link>)
            }

            else if (post.type === 'text') {
                return (<Link to={`/Feed/${post.id}`}><div className="postBody">
                    {post.text}
                    <br />
                    <br />
                    <br />
                    <p className="card-text">Text post</p>
                    <a href="#" className="card-link">Another link</a>
                </div></Link>)
            }
            else if (post.type === 'image') {
                return (<Link to={`/Feed/${post.id}`}><div className="postBody">
                    <img src={post.imageUrl} />
                    <p className="card-text">Image Post</p>
                    <a href="#" className="card-link">Another link</a>
                </div></Link>)
            }
        })

        }
    </div>)
}




export default FeedList;



