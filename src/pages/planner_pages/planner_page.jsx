import React from "react";
import Places from "./places";
import DropList from "./dropList";
import { DragDropContext } from "react-beautiful-dnd";
import Pcards from "./cardInfo";
import { useState } from "react";
import handleOnDragEnd from "./places"
import Mycomponent from "./map";
import { useEffect } from "react";

import { Wrapper, Status } from "@googlemaps/react-wrapper";



function PlanComponents(){
   
    const center = { lat: -34.397, lng: 150.644 };
   
   
return(
   

    // 

    // <DragDropContext >
<div class="box">

{/* <Wrapper apiKey={"AIzaSyDv7s0o1RX7hCsOYu3rQ0PR4TLaUlqqwgk"} >
<MapComp center={center} zoom={8}/>
</Wrapper> */}
       <Mycomponent/>
    
    
        {/* <DropList/> */}
    </div>
    //   </DragDropContext>

    
);

}
export default PlanComponents;