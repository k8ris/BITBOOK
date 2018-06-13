import React from 'react';



class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        FetchData.getPosts().then(posts => {
            this.setState({ posts: posts });
        })

        FetchData.getComments().then(comments => {
            this.setState({ comments: comments });
        })
    }


    render() {
        return (
            <div>
                <div className="picture"><img src={post.ImageUrl}
                    width="200" height="200" /></div>

                <div className="paragraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente unde nemo nesciunt ex adipisci error ipsam nisi aperiam,
                      voluptate odit fugiat recusandae ad alias at officia eos commodi facere voluptas!Obcaecati accusamus earum aliquam aliquid
                      nisi neque est incidunt quisquam vel. Repellat ipsum veritatis voluptatem quos, laudantium nulla, nihil aliquam quia, aliquid
                      fugit adipisci? Quisquam perferendis ipsum officia laudantium doloribus!</p></div>
                <div className="posts">
                    {post.text}
                </div>
                <div className="comments">
                    {post.comments}
                </div>
            </div>)






    };
}
export default ProfilePage