import React from 'react';


const FeedButton = (props) => {
    return (





        <div id="container-floating">

            {/* <div class="nd5 nds" data-toggle="tooltip" data-placement="left" data-original-title="Simone"></div> */}
            <div class="nd4 nds" data-toggle="tooltip" data-placement="left" onClick={props.showPost} ><img class="reminder" />
            </div>

            <div class="nd3 nds" data-toggle="tooltip" data-placement="left" ><img class="reminder" />
                <p>Image</p>
            </div>
            <div class="nd1 nds" data-toggle="tooltip" data-placement="left" ><img class="reminder" />
                <p class="letter">Video</p>
            </div>

            <div id="floating-button" data-toggle="tooltip" data-placement="left" data-original-title="Create" onclick="newmail()">
                <p class="plus">+</p>
                <img class="edit" src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png" />
            </div>

        </div>




    )



}



export default FeedButton