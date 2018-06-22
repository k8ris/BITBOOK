import React from 'react'

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
        };
    }

    componentDidMount() {

        fetchData.GetUser(userId).then(user => {
            this.setState({ user: user })
        })
    }

    render() {

        return (
            props.comments.map(comment => {

                return (
                    <div className="singlePost">
                        <img className="card-img-top" src={this.state.user} />
                        <h2 className="card-title">{comment.authorName}</h2>
                        <p className="card-text">{comment.body}</p>
                    </div>
                )
            })
        )
    }
}

export default Comments



{/* <div className="peopleCard row">
<img className="card-img-top" src={props.user.avatarUrl} />
<div className="card-body">
    <h2 className="card-title">{props.user.name}</h2>
    <p className="card-text">{props.user.aboutShort}</p>
    <p className="postCard"><small class="text-muted">Last post at</small></p>
    <p className="postCard"><small class="text-muted">{props.user.lastPostDate}</small></p>
</div>
</div> */}


{/* <p>{comment.authorName}</p> */ }
{/* <p>{comment.body}</p> */ }