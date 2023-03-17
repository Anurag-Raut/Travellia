import React from "react";
import NavBar from "./nav_bar";
// import Navbar from 'react-bootstrap/Navbar'
import Carousel_comp from "./front-carousel";
import BudgetCard from "./budget-card";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import Schedule from "../schedule/schedule.jsx";
import Footer from "./footer/footer.jsx";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "../planner_pages/navbar";
import PlanComponents from "../planner_pages/planner_page";
import Mycomponent from "../planner_pages/map";
import History from "../history/history.jsx";
import Pop_picks from "./popular_picks";
import FrontImage from "./landing-screen/front_image";
import SearchBox from "./landing-screen/search-box";
import FeatureCard from "./f-card/feature_card";
import FeatureSection from "./f-card/fcard_continer";
import gsap from "gsap";
import Rive from "@rive-app/react-canvas";
import LocomotiveScroll from "locomotive-scroll";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import ScrollSec from "./scroll-feat/scrollFeat";
import Loco from "./locomotive.jsx";
import { stringify } from "querystring";

import NewFooter from "./new-footer";
import FirstPage from "./firstpage";

function App() {
  const [city,setcity]=useState('');
  const ref = useRef(null);
  var loadin = 1;
  const [loading, setloading] = useState(1);
  const [gif, setgif] = useState(1);

  // const [preloader, setPreload] = useState(true);
  const [lscroll, setlscroll] = useState(null);

  const { rive, RiveComponent } = useRive({
    src: "travelgif.riv",
    artboard: "New Artboard",
    stateMachines: "State Machine 1",
    // animations:['Start','End'],
    autoplay: true,
  });
  // console.log(rive);

  const onhoverobj = useStateMachineInput(
    rive,
    "State Machine 1",
    "travel",
    true
  );
  // console.log(onhoverobj);

  const options = {
    smooth: true,
  };
  Loco({ start: 1,lscroll:lscroll,setlscroll:setlscroll});

  window.addEventListener("hashchange", (event) => {
    console.log(document.location.href)
    

    if (
      
      document.location.href==='https://travellio.web.app/'||
      document.location.href==='https://travellio.web.app/#'||
      document.location.href==='http://localhost:3000/'||
      document.location.href==='http://localhost:8888/'||
      document.location.href==="https://travelliaa.netlify.app/"||
      document.location.href==="https://travelliaa.netlify.app"||
      document.location.href==='https://travelliaa.netlify.app/'
    ) {
      //  Loco({ start: 1,lscroll:lscroll,setlscroll:setlscroll});
     
      document.location.reload();
    }
    else{
      console.log('heloooo again');
      // Loco({ start: 0,lscroll,setlscroll });
      // lscroll?.destroy();
    }
  });

 
 
 

  // window.addEventListener("popstate", (event) => {
    // console.log(document.location.href)

    

    if (
      
      document.location.href==='https://travellio.web.app/#'||
      document.location.href==='https://travellio.web.app/'||
      document.location.href==='http://localhost:3000/'||
      document.location.href==='http://localhost:3002/'||
      document.location.href==="https://travelliaa.netlify.app/"||
      document.location.href==="https://travelliaa.netlify.app"||
      document.location.href==='https://travelliaa.netlify.app/'
    ) {
     
     
      setTimeout(() => {
        console.log('hemlooooooooooooo')
        var element = document.getElementById("search-id");
        var element2 = document.getElementById("search-box-id");
        var navelement = document.getElementById("nav-id");
        element.style.setProperty("z-index", "100");
        navelement.style.setProperty("z-index", "2");

        element.style.setProperty("scale", "100%");
        element.style.setProperty("background-color", "transparent");
        element2.style.setProperty("scale", "100%");

        // element.style.setProperty("opacity", "0.1");
        element.style.setProperty("transition", "1s");
        setloading(0);
        setgif(0);
      }, 3000);
    }
    else{
      console.log('heloooo again');
      // Loco({ start: 0 });
      // lscroll?.destroy();
    }
  // },);

   


  const [Mainlisthook, updateMainHook] = useState([]);
  const [List1hook, updateList1Hook] = useState([]);
  const [List2hook, updateList2Hook] = useState([]);
  const [List3hook, updateList3Hook] = useState([]);
  const [List4hook, updateList4Hook] = useState([]);
  const [route1, updateroute1] = useState([]);
  const [route2, updateroute2] = useState([]);
  const [route3, updateroute3] = useState([]);
  const [route4, updateroute4] = useState([]);

  return (
    // <Router>

    <>
      {0 ? (
        <div class="loading">{/* <h1>take this L</h1> */}</div>
      ) : (
        <Router>
          <div>
            <Routes>
              <Route path="/history" element={<History  lscroll={lscroll} />} />

              <Route
                path="/plan-trip"
                element={
                  <PlanComponents
                    lscroll={lscroll}
                    List1hook={List1hook}
                    updateList1Hook={updateList1Hook}
                    List2hook={List2hook}
                    updateList2Hook={updateList2Hook}
                    List3hook={List3hook}
                    updateList3Hook={updateList3Hook}
                    List4hook={List4hook}
                    updateList4Hook={updateList4Hook}
                    Mainlisthook={Mainlisthook}
                    updateMainHook={updateMainHook}
                    route1={route1}
                    updateroute1={updateroute1}
                    route2={route2}
                    updateroute2={updateroute2}
                    route3={route3}
                    updateroute3={updateroute3}
                    route4={route4}
                    updateroute4={updateroute4}
                  />
                }
              />
              <Route
                path="/ab"
                element={
                  <div>
                    {/* <Navbar/> */}
                    <Schedule
                      lscroll={lscroll}
                      List1hook={List1hook}
                      updateList1Hook={updateList1Hook}
                      List2hook={List2hook}
                      updateList2Hook={updateList2Hook}
                      List3hook={List3hook}
                      updateList3Hook={updateList3Hook}
                      List4hook={List4hook}
                      updateList4Hook={updateList4Hook}
                      city={city}
                      setcity={setcity}
                    />
                  </div>
                }
              />

              <Route
                path="/"
                element={
                  <main class="contain" data-scroll-container>
                    {loading
                      ? (setTimeout(() => {
                          onhoverobj.value = !gif;
                        }, 2000),
                        (
                          <div className="loading-screen">
                           
                            <RiveComponent
                            
                              className="loading-gif"
                            
                            />
                             <h1 style={{fontSize:'10vh'}} class="d-flex">Travellia</h1>
                          </div>
                        ))
                      : null}
                    <NavBar />

                    <FrontImage
                      List1hook={List1hook}
                      updateList1Hook={updateList1Hook}
                      List2hook={List2hook}
                      updateList2Hook={updateList2Hook}
                      List3hook={List3hook}
                      updateList3Hook={updateList3Hook}
                      List4hook={List4hook}
                      updateList4Hook={updateList4Hook}
                      Mainlisthook={Mainlisthook}
                      updateMainHook={updateMainHook}
                      route1={route1}
                      updateroute1={updateroute1}
                      route2={route2}
                      updateroute2={updateroute2}
                      route3={route3}
                      updateroute3={updateroute3}
                      route4={route4}
                      updateroute4={updateroute4}
                      loadin={loading}
                      city={city}
                      setcity={setcity}
                    />

                    <ScrollSec />
                    <FeatureSection />
                    <Footer />
                  </main>
                }
              />
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
