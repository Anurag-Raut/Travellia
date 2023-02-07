import React from "react";
import NavBar from './nav_bar';
// import Navbar from 'react-bootstrap/Navbar' 
import  Carousel_comp from "./front-carousel"
import BudgetCard from "./budget-card";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import Schedule from "../Mindist_page/schedule";



// import {Routes, Route, useNavigate} from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import PlanComponents from "../planner_pages/planner_page";
import Mycomponent from "../planner_pages/map";

  





function App(){

    const [Mainlisthook, updateMainHook] = useState([]);
  const [List1hook, updateList1Hook] = useState([]);
  const [List2hook, updateList2Hook] = useState([]);
  const [List3hook, updateList3Hook] = useState([]);
  const [List4hook, updateList4Hook] = useState([]);


    
    
    return <Router>
         <div>

         <Routes>

         <Route path='/plan-trip' element={
            <Mycomponent List1hook={List1hook} updateList1Hook={updateList1Hook} List2hook={List2hook} updateList2Hook={updateList2Hook} List3hook={List3hook} updateList3Hook={updateList3Hook} List4hook={List4hook} updateList4Hook={updateList4Hook}  />
         }/>
         <Route path='/ab' element={
            <Schedule List1hook={List1hook} updateList1Hook={updateList1Hook} List2hook={List2hook} updateList2Hook={updateList2Hook} List3hook={List3hook} updateList3Hook={updateList3Hook} List4hook={List4hook} updateList4Hook={updateList4Hook}/>
         }/>
          
        <Route path='/' element={ 
        
    <div>
        <NavBar/>
        <Carousel_comp/>
        <BudgetCard  List1hook={List1hook} updateList1Hook={updateList1Hook} List2hook={List2hook} updateList2Hook={updateList2Hook} List3hook={List3hook} updateList3Hook={updateList3Hook} List4hook={List4hook} updateList4Hook={updateList4Hook} />
        <div id="map">
            <h1>Hello</h1>
        </div>

    </div>
        
         } />
        </Routes>
    </div>



    </Router>
  

    

}

export default App;