import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
// import { motion } from "framer-motion";
import Form from "react-bootstrap/Form";
import { motion ,Variants} from "framer-motion";
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { toast ,ToastContainer} from "react-toastify";
import {  useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
// import 
// import { start } from "repl";
gsap.registerPlugin(ScrollTrigger);

function SearchBox({List1hook,updateList1Hook,List2hook,updateList2Hook,List3hook,updateList3Hook,List4hook,updateList4Hook,Mainlisthook,updateMainlisthook,route1,updateroute1,route2,updateroute2,route3,updateroute3,route4,updateroute4 }) {
  const navigate = useNavigate();
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });
  var dur=0;
  const [isOpen, setIsOpen] = useState(false);
  const  Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };
  function onclickHandle() {
    console.log('hi');
    if (coordinates.lat === null || coordinates.lng === null) {
      toast.error("Enter Location");
      return;
    }
 

    updateList1Hook([]);
    updateList2Hook([]);
    updateList3Hook([]);
    updateList4Hook([]);
    var element=document.getElementById('search-id')
    var element2=document.getElementById('search-box-id')
    element2.style.setProperty("background-color", "white");
    element.style.setProperty("z-index", "100");
    
      element.style.setProperty("scale", "10000%");
      
      element.style.setProperty("background-color", "white");
      // element.style.setProperty("opacity", "0.1");
      element.style.setProperty("transition", "2s");
      <ToastContainer />;
    setTimeout(()=>{
      navigate("/plan-trip", {
        state: { lat: coordinates.lat, lng: coordinates.lng },
      });
    },500)
   

  
  
  }


  return (
    <div id='search-id' class='search-box-div'>
 
   
   
    <PlacesAutocomplete
              value={address}
              onChange={setAddress}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div id='search-box-id' style={{zIndex:10 }} class='search-box'>
                  
                  <motion.div  initial={{scale:'1'}} layout="true" transition={{duration:0.5,type:'spring'}} whileTap={{scale:'1.1'}} class="searInput">
                    <input
                      type="text"
                      id="form"
                      class="form-control"
                      {...getInputProps({ placeholder: "Type City" })}
                    />
                    
                    {/* <label class="form-label" for="form12">Example label</label> */}
                  </motion.div>

                
                 
                  

                  <div>
                    {loading ? <div>...loading</div> : null}

                    {suggestions.map((suggestion) => {
                      const style = suggestion.active?  {
                       
                      backgroundColor:'#b8bab9',
                      // opacity:'0',
                      // borderRadius: '25px',
                     

                        

                       
                      }:{
                        backgroundColor:'#ffff',
                        // borderStyle:'solid'
                        //  borderRadius: '25px',

                      }

                      return (
                        <motion.div class='search-child'  whileHover={{
                          scale: 1.02,
                          // opacity:0.5,
                          transition: { duration: 0.5 },
                        }} initial={{opacity:0}} animate={{opacity:1}}  {...getSuggestionItemProps(suggestion, { style })}>
                          {suggestion.description}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
            <motion.button initial={{scale:'1'}} layout="true" transition={{duration:10,type:'spring'}} whileHover={{scale:'1.3',duration:'5'}} whileTap={{scale:'1.1',duration:'5'}} type="button" class="btn btn-dark" onClick={onclickHandle}>Go</motion.button>

  </div>
  );
}

export default SearchBox;
