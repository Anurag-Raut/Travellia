import React from "react";
import PlaceCard from "./place-card";

function Pop_picks(){



    return(

        <div class='pc-parent-div'>
            <h1>Get Started</h1>
            <PlaceCard imga='./ef.png' color='#5FCBE8' y={500} x={50} />
            <PlaceCard imga='./ef.png' color='blue' y={200} x={100}/>

            <PlaceCard imga='./ef.png' />
            <PlaceCard imga='./ef.png' />
            <PlaceCard imga='./ef.png' />


            
        </div>
    );


}

export default Pop_picks;