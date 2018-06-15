import React from 'react';
import { Link } from 'react-router-dom';

export const Video = (props) => {

    return(

        <Link to={`/${props.post.type}/${props.post.id}`}>
        <div className="postBody">

            <div className="frame">
            <iframe src={props.post.videoUrl} title='yt'/>
            </div>

            <div className="cardStyle">
            <p className="card-text">Video post</p>
            <a className="card-link">Another link</a>
            </div> 

        </div>
        </Link>   
    )
} 

export const Text = (props) => {

    return(

        <Link to={`/${props.post.type}/${props.post.id}`}>
        <div className="postBody"> 

            {props.post.text}
            <br />
            <br />
            <br />

            <div className="cardStyleTxt">
            <p className="card-text">Text post</p>
            <a className="card-link">Another link</a>
            </div>
        </div>
        </Link>    
    )
} 

export const Image = (props) => {

    return(

        <Link to={`/${props.post.type}/${props.post.id}`}>
        <div className="postBody">

            <img src={props.post.imageUrl} alt='img'/>

            <div className="cardStyleImg">
            <p className="card-text">Image Post</p>
            <a className="card-link">Another link</a>
            </div>
            
        </div>
        </Link>   
    )
}

