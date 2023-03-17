import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../planner_pages/navbar";
import ScheduleComp from "../schedule/schedule-comp";
import HisCard from "./hist_card";
import "../schedule/schedule.css"
import Sidebar from "./sidebar";
import { motion } from "framer-motion"; 
import SideNavigation from "./sidebar";
import { useRive } from "rive-react";
// import Navbar from '../planner_pages/navbar.jsx'
function History( {lscroll}) {
  const [rowNo,setrowNo]=useState(0);
  const [detailview, setdview] = useState(0);
  const [array, setArray] = useState([{}]);
  const [row, setrow] = useState([]);

  useEffect(()=>{

    lscroll?.destroy();


   },[])
  
 const { loginWithRedirect,user, logout, isAuthenticated } = useAuth0();
  const [hide, sethide] = useState(0);
  useEffect(() => {
    
    axios
      .get("/.netlify/functions/api")
      .then((res) => {
        setArray(res.data);
        // console.log(res.data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }, []);
 const [rows,setrows]=useState([{id:0,date:'4'}]);
 var rowarray=[];

 array.map((prop,index)=>{
  // console.log(prop.email);
  if(prop.useremail===user?.email){
    rowarray.push({id:index+1,date:prop.date,city:prop.cityy})
  }
           




})
// setrow(rowarray);


const { rive, RiveComponent } = useRive({
  src: "loginRive.riv",
 
  // stateMachines: "State Machine 1",
  // animations:['Start','End'],
  autoplay: true,
});



  
//  console.log(array);

  var i = 0;

  

  //
  return (
  
      

    <motion.div layout>


      {

        !isAuthenticated ? 
        <div class='d-flex' style={{height:'80vh'}} className="login-rive">
         <nav  class="navbar navbar-dark bg-dark">
  <a class="navbar-brand mb-0 h1" href="/"><h1 style={{marginLeft:'20px'}}>Travellia</h1></a>
</nav>
          
         <h1 style={{marginTop:'40px'}}>Login to view History</h1>
                           
        <RiveComponent
        
        style={{height:'80vh',marginTop:'40px'}}
          className="login-gif"
        
        />
        <Link style={{marginTop:'40px'}}
                class="btn btn-light   active"
                role="button"
                aria-pressed="true"
                onClick={loginWithRedirect}
              >
                Log In
              </Link>
        </div>
        
        :
      
      detailview ? (
        <div>
 
          
          
         {/* { console.log(array[ind])} */}
          <ScheduleComp
            List1hook={array[rowNo].List1hook}
            List2hook={array[rowNo].List2hook}
            List3hook={array[rowNo].List3hook}
            List4hook={array[rowNo].List4hook}
            route1={array[rowNo].route1[0]}
            route2={array[rowNo].route2[0]}
            route3={array[rowNo].route3[0]}
            route4={array[rowNo].route4[0]}
            hide={hide}
            detailview={detailview}
            setdview={setdview}
            // cityName={cityName}
            sethide={sethide}
          />
        </div>
      ) : (

        
       
        <motion.div layout class="history d-flex">
            <SideNavigation/>
            <motion.div layout class='history-white'>
              <h1 class='saved-history-title'>Saved History</h1>
          
          
           <HisCard row={row} setrow={setrow} setArray={setArray} array={array}   rows={rowarray} detailview={detailview} rowNo={rowNo} setrowNo={setrowNo} setdview={setdview} />
          </motion.div>
           </motion.div>
       
      )}
    </motion.div>

      

  );
}
export default History;
