import React from "react";
import { motion } from "framer-motion";
import { red } from "@mui/material/colors";
function PlaceCard(props){



    return(

        

        <motion.div   class='pc-div' style={{backgroundColor:`${props.color}` ,top:`${props.x}px`,left:`${props.x}px`}}  >
            <h1 class='pc-heading'>{props.heading}</h1>
            <img class='pc-img' src={require(`${props.imga}`)} alt="" />
            

            
            
        </motion.div>
    );


}

export default PlaceCard;