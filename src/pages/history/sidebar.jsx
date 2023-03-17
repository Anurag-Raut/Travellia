import { useState } from "react";
import './history.css'
import { motion, spring } from "framer-motion";
import { useNavigate } from "react-router-dom";

function SideNavigation () {
    const navigate=useNavigate();
  

  return (
    <motion.div transition={{type:'spring',transition:0.5}} whileHover={{width:'40vh'}} class='history-black'>
       <div class='d-flex' style={{justifyContent:'center',marginTop:'7vh'}}>
            <a href='/' style={{color:'white',display:'flex',textAlign:'center'}}>
            <h1>Travellia</h1>
        </a>

            </div>

        <div style={{marginTop:'30vh'}} >
            <motion.a whileHover={{scale:1.5,opacity:0.7,}} class='d-flex' style={{justifyContent:'center',marginTop:'7vh'}} href='/'>
            <motion.h5   style={{color:'white',display:'flex',textAlign:'center'}}>
            Home
        </motion.h5>

            </motion.a>
       
            
            <motion.a whileHover={{scale:1.5,opacity:0.7,}} class='d-flex' style={{justifyContent:'center',marginTop:'7vh'}} href='/' >
            <motion.h5  style={{color:'white',display:'flex',textAlign:'center'}}>
            Contact Us
        </motion.h5>

            </motion.a>

        </div>



    </motion.div>
   


  );
};
export default SideNavigation;
