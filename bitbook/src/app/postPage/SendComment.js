import React from 'react';
import fetchData from '../../service/ServiceGetData'

class SendComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        };

    }

    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    }

    send = () => {
        fetchData.sendComment({
            body: this.state.comment,
            postId: this.props.postId
        })
            .then(() => {
                this.props.loadComment
            })

    }

    render() {

        return (

            <div>
                <input type='text' value={this.state.comment} onChange={this.handleChange} />
                <button type="submit" onClick={this.send}> SEND</button>
            </div>
        )

    }

}


export default SendComment



