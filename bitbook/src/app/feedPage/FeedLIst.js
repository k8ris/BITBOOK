import React from 'react';
import { Text, Image, Video } from './FeedItem';

const FeedLIst = (props) => {

    return (

        <div className='feedPosts'>
            {props.posts.map(post => {
                // 1.pitanje
                if (post.type === 'video') { return <Video post={post} /> }
                else if (post.type === 'text') { return <Text post={post} /> }
                else if (post.type === 'image') { return <Image post={post} /> }

            }

            )
            }
        </div>)
}




export default FeedLIst;



