

import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
function History(){
    const [array,setArray]=useState([{}]);
    const { user, isAuthenticated, isLoading } = useAuth0()

    useEffect(()=>{
        setTimeout(()=>{
            axios.get('/.netlify/functions/api')
            .then(res => {
                setArray(res.data);
                console.log(array);
            })
            .catch(function (error) {
                console.log(error);
            })
        },0)
       


    },[])

    var i=1;


    function func(){
        // if(data.useremail===user.email){
            return (

                <div class="d-flex">
                         <h1 class="d-flex">Schedule {i++}</h1>
                         <button type="button" class="btn btn-light d-flex">Light</button>
                </div>
               

            );
        // }

       
    }


   
    // 
    return(
        array.map(func)
        
    );
}
export default History;