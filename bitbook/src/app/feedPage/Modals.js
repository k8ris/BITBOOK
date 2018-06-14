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
  <div class="modal-dialog" role="document">
    <div className="modal-content"> 
<div className="modal-header">
        <h5 class="modal-title">New post</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={this.handlerCloseModal}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Post content</p>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-primary">Post</button>
      </div>
      </div>
  </div>
</Modal> 




</div>)


}

} 

export default Modals;








