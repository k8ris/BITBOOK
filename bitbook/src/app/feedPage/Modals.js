import React from 'react';
import Modal from 'react-modal';
import FeedButton from './FeedButton'


class Modals extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showModal:false,
        };
    } 




handlerOpenModal= ()=>{

    this.setState({showModal:true});
} 

handlerCloseModal= ()=>{

    this.setState({showModal:false});
} 







render(){return (
<div>


<FeedButton showPost={this.handlerOpenModal} showImage={this.handlerOpenModal} showVideo={this.handlerOpenModal} />

<Modal isOpen={this.state.showModal} contentLabel='newPost'>
<h1>New Post</h1>
{/* ubaciti dugme */}
<div class="input-group mb-3">
  <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" >Post</button> 
  </div>
</div>
</Modal> 




</div>)

}

} 

export default Modals;
