import React from 'react'

const Comments = (props) => {


    return (
        props.comments.map(comment => {

            return (
                <div>
                    <p>{comment.authorName}</p>
                    <p>{comment.body}</p>
                </div>
            )
        })
    )
}

export default Comments