import React from 'react';
import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import Pcards from './cardInfo';

import Places from './places';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Card } from 'react-bootstrap';
import { useEffect } from 'react';
import { List,Paper } from '@mui/material';
import {Button} from 'react-bootstrap';




function Mycomponent({List1hook,updateList1Hook,List2hook,updateList2Hook,List3hook,updateList3Hook,List4hook,updateList4Hook }) {
  const navigate=useNavigate();
  function onClickHandle(){


      setFlag(1);
    navigate('/ab');

  }









  const[marker,setMarker]=useState([]);
  function setMapOnAll(map) {
    for (let i = 0; i < marker.length; i++) {
      marker[i].setMap(map);
    }
  }
  function hideMarkers() {
    setMapOnAll(null);
    const w=[];
    while(marker.length>0){
      marker.pop();
    }
    // setMarker(w);
    console.log(marker);
    
  }
  const {state} = useLocation();
  const { lat, lng } = state;
  const coords={lat: lat ,lng:lng}
  const [map,setMapu]=useState('');
    
    
  const [ntype,setType]=useState('all');
  const[count,setC]=useState(0);
  const [arr,setArray]=useState([]);
  const [all,setAll]=useState([]);
  const [res,setRes]=useState([]);
  const [hot,setHot]=useState([]);
  const [site,setsite]=useState([]);

  const [flag,setFlag]=useState(0);


    
    

  // // },[])
  useEffect(()=>{
    hideMarkers();
    const m=[];
    function createMarkeru(props){
      const mark=new google.maps.Marker({
        position: props,
        map,
        // title: "Hello World!",
       
      });
      m.push(mark);
      
    }
    setMapOnAll(map)
    for(var i=0;i<arr.length;i++){
      // console.log(arr[i].cords);
      createMarkeru(arr[i].cords);
    }
    setMarker(m);
    console.log(marker);

  },[map,arr])

  


const places=[];
useEffect(()=>{
 
  if(ntype==='restaurant'){
    setArray(res)
  }
  if(ntype==='lodging'){
    setArray(hot);
  } 
  if(ntype==='tourist_attraction'){
    setArray(site);
  } 
  if(ntype==='all'){
    setArray(all);
  }       
      

},[ntype])
useEffect(()=>{
//  console.log('hi');
  setArray(all);
  // console.log(arr);
  // updateMainHook(arr);
       
      

},[all])


const typesarr=[''];


let mappu;
const google = window.google






 const handleApiLoaded = (map,maps) => {
  setMapu(map);
    var service = new google.maps.places.PlacesService(map);
    function callback1(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {

        for (var i = 0; i < results.length; i++) {
          const w=[];
          w.push({title:results[i].name , id:results[i].place_id, cords:results[i].geometry.location});
         setAll(all => [...all,...w]);
        }
       
      }
    }
    function callback2(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {

        for (var i = 0; i < results.length; i++) {
          const w=[];
          w.push({title:results[i].name , id:results[i].place_id, cords:results[i].geometry.location});
         setRes(res => [...res,...w]);
        }
       
      }
    }
    function callback3(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {

        for (var i = 0; i < results.length; i++) {
          const w=[];
          w.push({title:results[i].name , id:results[i].place_id, cords:results[i].geometry.location});
         setHot(hot => [...hot,...w]);
        }
       
      }
    }
    function callback4(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {

        for (var i = 0; i < results.length; i++) {
          const w=[];
          w.push({title:results[i].name , id:results[i].place_id, cords:results[i].geometry.location});
          setsite(Site => [...Site,...w]);
        }
       
      }
    }
    var request1 = {
      location:  coords,
      radius: '1000',
      type: 'all',
    };
    var request2 = {
      location:  coords,
      radius: '1000',
      type: 'restaurant',
    };
    var request3 = {
      location:  coords,
      radius: '1000',
      type: 'lodging',
    };
    var request4 = {
      location:  coords,
      radius: '1000',
      type: 'tourist_attraction',
    };
    service.nearbySearch(request1, callback1);
    service.nearbySearch(request2, callback2);
    service.nearbySearch(request3, callback3);
    service.nearbySearch(request4, callback4);
   
   
 
    function createMarker(props){
      const a=new google.maps.Marker({
        position: props,
        map,
        title: "Hello World!",
      });
     
    }
    

      createMarker(coords);
      


    


  };

  // useEffect(()=>{
    
  //   updateMainHook(arr);

  // },[arr])


 


  

  return (
    <div>
 

   
    <div class="mapp">
      

<GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDv7s0o1RX7hCsOYu3rQ0PR4TLaUlqqwgk" }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        yesIWantToUseGoogleMapApiInternals
  onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
 
      >
       
      </GoogleMapReact>

      
    </div>

    <div>

<div>
<Button variant="outline-primary" onClick={() => setType('restaurant')}>restaurant</Button>{' '}
<Button variant="outline-secondary" onClick={() => setType('lodging')}>hotel</Button>{' '}
<Button variant="outline-success" onClick={() => setType('all')}>all</Button>{' '}
<Button variant="outline-success" onClick={() => setType('tourist_attraction')}>sites</Button>{' '}
 </div>

    <Places places={arr} navigate={ navigate} flag={flag} List1hook={List1hook} updateList1Hook={updateList1Hook} List2hook={List2hook} updateList2Hook={updateList2Hook} List3hook={List3hook} updateList3Hook={updateList3Hook} List4hook={List4hook} updateList4Hook={updateList4Hook}   />

<div>
  
<Button variant="light" onClick={onClickHandle} >Light</Button>{' '}
</div>

</div>
    </div>

  );
}

export default Mycomponent;