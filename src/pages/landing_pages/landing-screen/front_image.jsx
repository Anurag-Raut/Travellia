import React, { useEffect } from "react";
import gsap from "gsap";
import SearchBox from "./search-box";
import Loco from "../locomotive";
import './fi.css';

function FrontImage({List1hook,updateList1Hook,List2hook,updateList2Hook,List3hook,updateList3Hook,List4hook,updateList4Hook,Mainlisthook,updateMainlisthook,route1,updateroute1,route2,updateroute2,route3,updateroute3,route4,updateroute4,loadin }){

   
    return(
        <div id="hero" className="parallax fi-sec" data-depth='0.5' data-scroll-section >
           
             
            <h1 class='img-text hello'>
                Plan Your Travel
             </h1>
             <SearchBox   List1hook={List1hook}
            updateList1Hook={updateList1Hook}
            List2hook={List2hook}
            updateList2Hook={updateList2Hook}
            List3hook={List3hook}
            updateList3Hook={updateList3Hook}
            List4hook={List4hook}
            updateList4Hook={updateList4Hook}
            Mainlisthook={Mainlisthook}
           
            route1={route1}
            updateroute1={updateroute1}
            route2={route2}
            updateroute2={updateroute2}
            route3={route3}
            updateroute3={updateroute3}
            route4={route4}
            updateroute4={updateroute4}/>
             <img data-scroll data-scroll-repeat data-scroll-call='event1' class='front-img' src={require('./fi.jpg')} alt="" >
                
             </img>
            
        </div>
       
        
    );
}
export default FrontImage;