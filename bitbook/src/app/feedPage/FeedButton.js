import React from 'react';


const FeedButton = (props) => { 

    return (

        <div id="container-floating">
            <div class="nd4 nds smallButton" data-toggle="tooltip" data-placement="left" onClick={props.showPost}>
                <p className="letter">Post</p>
            </div>

            <div class="nd3 nds smallButton" data-toggle="tooltip" data-placement="left" onClick={props.showImage}>
                <p class="letter">Image</p>
            </div>
            <div class="nd1 nds smallButton" data-toggle="tooltip" data-placement="left" onClick={props.showVideo}>
                <p class="letter">Video</p>
            </div>

            <div id="floating-button" data-toggle="tooltip" data-placement="left" data-original-title="Create" onclick="newmail()">
                <p class="plus">+</p>
                <img class="edit" src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png" alt='img'/>
            </div>
        </div>
    )
}

export default FeedButton;