import React from "react";
import GoogleMapReact from "google-map-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Places from "./places";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Card } from "react-bootstrap";
import { useEffect } from "react";
import { List, Paper } from "@mui/material";
import { Button } from "react-bootstrap";
import DropBox from "./dropBox";
import Loco from "../landing_pages/locomotive";

function Mycomponent({
  List1hook,
  updateList1Hook,
  List2hook,
  updateList2Hook,
  List3hook,
  updateList3Hook,
  List4hook,
  updateList4Hook,
  route1,
  updateroute1,
  route2,
  updateroute2,
  route3,
  updateroute3,
  route4,
  updateroute4,

 
}) {

  


 




  const navigate = useNavigate();
  function onClickHandle() {
    setFlag(1);
    window.localStorage.setItem("list1", JSON.stringify(List1hook));
    window.localStorage.setItem("list2", JSON.stringify(List2hook));
    window.localStorage.setItem("list3", JSON.stringify(List3hook));
    window.localStorage.setItem("list4", JSON.stringify(List4hook));
    window.localStorage.setItem("route1", JSON.stringify(route1));
    window.localStorage.setItem("route2", JSON.stringify(route2));
    window.localStorage.setItem("route3", JSON.stringify(route3));
    window.localStorage.setItem("route4", JSON.stringify(route4));
    // localStorage.setItem('Name', List1hook);
    navigate("/ab");

  }

  const [marker, setMarker] = useState([]);
  function setMapOnAll(map) {
    for (let i = 0; i < marker.length; i++) {
      marker[i].setMap(map);
    }
  }
  function hideMarkers() {
    setMapOnAll(null);
    const w = [];
    while (marker.length > 0) {
      marker.pop();
    }
    // setMarker(w);
    // console.log(marker);
  }
  var latn=0;
  var lngn=0;
  const { state } = useLocation();
  // console.log(state);
  const { lat, lng,city} = state;
  const [apiData, setApiData] = useState('');
  const[index,setindex]=useState();
  // console.log(date)

  useEffect(()=>{
  
    if(apiData!==''){
      // console.log("hiiiiiiii");
      // console.log(apiData.list);
      for(var i=0;i<(apiData.list).length;i++){
      
       
        // console.log(d);
        const myArray = (apiData.list[i].dt_txt).split(' ');
        const str=myArray[0];
      //  if(str===date){
      //   setindex(i);
      //   console.log(i);
      //  }
      
    }
    }
   
    
  },[apiData])
  const coords = { lat: lat, lng: lng };
  latn=lat;
  lngn=lng;
  


 





  const [map, setMapu] = useState("");

  const [ntype, setType] = useState("all");
  const [count, setC] = useState(0);
  const [arr, setArray] = useState([]);
  const [all, setAll] = useState([]);
  const [res, setRes] = useState([]);
  const [hot, setHot] = useState([]);
  const [site, setsite] = useState([]);

  const [flag, setFlag] = useState(0);
  const [Mainlisthook, updateMainHook] = useState(arr);
  const [wa, setwa] = useState([]);

  // // },[])y
  useEffect(() => {
    hideMarkers();
    const m = [];
    function createMarkeru(props) {
      const mark = new google.maps.Marker({
        position: props,
        map,
        // title: "Hello World!",
      });
      m.push(mark);
    }
    setMapOnAll(map);
    for (var i = 0; i < arr.length; i++) {
      // console.log(arr[i].cords);
      createMarkeru(arr[i].cords);
    }
    setMarker(m);
    // console.log(marker);
  }, [map, arr]);

  const places = [];
  useEffect(() => {
    if (ntype === "restaurant") {
      setArray(res);
    }
    if (ntype === "lodging") {
      setArray(hot);
    }
    if (ntype === "tourist_attraction") {
      setArray(site);
    }
    if (ntype === "all") {
      setArray(all);
    }
  }, [ntype]);
  useEffect(() => {
    //  console.log('hi');
    setArray(all);
    // console.log(arr);
    // updateMainHook(arr);
  }, [all]);

  const typesarr = [""];

  let mappu;
  const google = window.google;

  const handleApiLoaded = (map, maps) => {
    setMapu(map);
    var service = new window.google.maps.places.PlacesService(map);
    function callback1(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        // console.log(results);
        for (var i = 0; i < results.length; i++) {
          const w = [];
          w.push({
            title: results[i].name,
            id: results[i].place_id,
            cords: results[i].geometry.location,
            other: results[i],
          });
          setAll((all) => [...all, ...w]);
        }
      }
    }
    function callback2(results, status) {
      if (status == google?.maps?.places?.PlacesServiceStatus?.OK) {
        for (var i = 0; i < results.length; i++) {
          const w = [];
          w.push({
            title: results[i].name,
            id: results[i].place_id,
            cords: results[i].geometry.location,
            other: results[i],
          });
          setRes((res) => [...res, ...w]);
        }
      }
    }
    function callback3(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          const w = [];
          w.push({
            title: results[i].name,
            id: results[i].place_id,
            cords: results[i].geometry.location,
            other: results[i],

          });
          setHot((hot) => [...hot, ...w]);
        }
      }
    }
    function callback4(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          const w = [];
          w.push({
            title: results[i].name,
            id: results[i].place_id,
            cords: results[i].geometry.location,
            other: results[i],
          });
          setsite((Site) => [...Site, ...w]);
        }
      }
    }
    var request1 = {
      location: coords,
      radius: "10000",
      type: "all",
    };
    var request2 = {
      location: coords,
      radius: "100000",
      type: "restaurant",
    };
    var request3 = {
      location: coords,
      radius: "100000",
      type: "lodging",
    };
    var request4 = {
      location: coords,
      radius: "100000",
      type: "tourist_attraction",
    };
    service.nearbySearch(request1, callback1);
    service.nearbySearch(request2, callback2);
    service.nearbySearch(request3, callback3);
    service.nearbySearch(request4, callback4);

    function createMarker(props) {
      const a = new google.maps.Marker({
        position: props,
        map,
        title: "Hello World!",
      });
    }

    createMarker(coords);
  };
  

  return (
    <div class="planner-container" data-scroll-section>
      <div class="next ">
      <button type="button" onClick={onClickHandle} class="btn btn-info">NEXT</button>
      </div>

      <div id='map' class="mapp" style={{height:'0px',width:'0px'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDv7s0o1RX7hCsOYu3rQ0PR4TLaUlqqwgk" }}
          defaultCenter={coords}
          center={coords}
          defaultZoom={14}
          // margin={[50, 50, 50, 50]}
          style={{opacity:1,width:'0px',height:'0px'}}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        ></GoogleMapReact>
      </div>

      <div>
        <div>
          <Button
            variant="outline-primary"
            onClick={() => setType("restaurant")}
          >
            restaurant
          </Button>{" "}
          <Button
            variant="outline-secondary"
            onClick={() => setType("lodging")}
          >
            hotel
          </Button>{" "}
          <Button variant="outline-success" onClick={() => setType("all")}>
            all
          </Button>{" "}
          <Button
            variant="outline-success"
            onClick={() => setType("tourist_attraction")}
          >
            sites
          </Button>{" "}
        </div>

        <Places
          places={arr}
          navigate={navigate}
          flag={flag}
          List1hook={List1hook}
          updateList1Hook={updateList1Hook}
          List2hook={List2hook}
          updateList2Hook={updateList2Hook}
          List3hook={List3hook}
          updateList3Hook={updateList3Hook}
          List4hook={List4hook}
          updateList4Hook={updateList4Hook}
          map={map}
          Mainlisthook={Mainlisthook}
          updateMainHook={updateMainHook}
          wa={wa}
          setwa={setwa}
          route1={route1} updateroute1={updateroute1} route2={route2} updateroute2={updateroute2} route3={route3} updateroute3={updateroute3}  route4={route4} updateroute4={updateroute4} 
        />
     

      </div>
    </div>
  );
}

export default Mycomponent;
