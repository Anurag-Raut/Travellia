import React from "react";
import Places from "./places";

import { DragDropContext } from "react-beautiful-dnd";

import { useState } from "react";
import handleOnDragEnd from "./places"
import Mycomponent from "./map";
import { useEffect } from "react";
import "./planner_pages.css"
import PlaceDetail from "./placedetail";

import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Navbar from "./navbar";
import Rive from "@rive-app/react-canvas";
import useRive from "@rive-app/react-canvas";

function PlanComponents({lscroll,List1hook,updateList1Hook,List2hook,updateList2Hook,List3hook,updateList3Hook,List4hook,updateList4Hook,Mainlisthook,updateMainlisthook,route1,updateroute1,route2,updateroute2,route3,updateroute3,route4,updateroute4 }){
   
   
   useEffect(()=>{

    if(lscroll )lscroll.destroy();


   },[])
  
return(
   



   

  
<div class="box">


        <Navbar/>
       
 
     
       <Mycomponent List1hook={List1hook} updateList1Hook={updateList1Hook} List2hook={List2hook} updateList2Hook={updateList2Hook} List3hook={List3hook} updateList3Hook={updateList3Hook} List4hook={List4hook} updateList4Hook={updateList4Hook} Mainlisthook={Mainlisthook} updateMainlisthook={updateMainlisthook} route1={route1} updateroute1={updateroute1} route2={route2} updateroute2={updateroute2} route3={route3} updateroute3={updateroute3}  route4={route4} updateroute4={updateroute4}   />

       
     

        

    </div>
    

    
);

}
export default PlanComponents;