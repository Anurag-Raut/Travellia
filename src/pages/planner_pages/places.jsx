import React from "react";
import ReactScrollableList from "react-scrollable-list";
import Pcards from "./cardInfo";
import Bucket from "./cardInfo";
import { useState } from "react";
import { Card } from "react-bootstrap";
// import characters from "./planner_page"
import { Grid, Paper, List } from "@mui/material";
import PlanComponents from "./planner_page";

import { useEffect } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";



function Places({ places,navigate,flag,List1hook,updateList1Hook,List2hook,updateList2Hook,List3hook,updateList3Hook,List4hook,updateList4Hook }) {
  const [Mainlisthook, updateMainHook] = useState(places);
  // const [List1hook, updateList1Hook] = useState([]);
  // const [List2hook, updateList2Hook] = useState([]);
  // const [List3hook, updateList3Hook] = useState([]);
  // const [List4hook, updateList4Hook] = useState([]);
  const [wa, setwa] = useState([]);
  
  useEffect(()=>{
    setwa(List1hook);
    console.log(List1hook);

  },[List1hook])


  const w=[];
  useEffect(() => {
    updateMainHook(places);
  }, [places]);
  // places.map(()=>{w.push(places)});
  // for(var i=0;i<List1hook.length;i++){
  //   console.log(List1hook.title);
  //   w.push(List1hook.title);
  // }
  console.log(w);
    
    // if(places.size()>0){
      // w.push({title:"sc" , id:"places[0].place_id", cords:"places[0].geometry.location"})
    // for
    useEffect(()=>{
      if(flag==1){
        navigate('/ab',{statee:{wa:wa}});
      }

    },[flag])
 


  function handleOnDragEnd(result) {
    // console.log(result);
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    var add,
      mainList = Mainlisthook,
      list1 = List1hook,
      list2 = List2hook,
      list3 = List3hook,
      list4 = List4hook;
    if (source.droppableId === "main-list") {
      add = mainList[source.index];
      mainList.splice(source.index, 1);
    } else if (source.droppableId === "list1") {
      add = list1[source.index];
      list1.splice(source.index, 1);
    } else if (source.droppableId === "list2") {
      add = list2[source.index];
      list2.splice(source.index, 1);
    } else if (source.droppableId === "list3") {
      add = list3[source.index];
      list3.splice(source.index, 1);
    } else if (source.droppableId === "list4") {
      add = list3[source.index];
      list4.splice(source.index, 1);
    }

    if (destination.droppableId === "main-list") {
      mainList.splice(destination.index, 0, add);
    } else if (destination.droppableId === "list1") {
      list1.splice(destination.index, 0, add);
    } else if (destination.droppableId === "list2") {
      list2.splice(destination.index, 0, add);
    } else if (destination.droppableId === "list3") {
      list3.splice(destination.index, 0, add);
    } else if (destination.droppableId === "list4") {
      list4.splice(destination.index, 0, add);
    }

    updateMainHook(mainList);
    updateList1Hook(list1);
    updateList2Hook(list2);
    updateList3Hook(list3);
    updateList4Hook(list4);
    // console.log(List1hook);
    setwa(List1hook);
    console.log(wa);;
  }
 

  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div class="places">
          <Droppable droppableId="main-list">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Paper style={{ maxHeight: 500, overflow: "auto" }}>
                  {Mainlisthook.map(({ id, title }, index) => {
                    return (
                      // <div class  data-bs-spy="scroll">
                      <List key={index} item xs={12}>
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <li
                              key={id}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <Card>
                                <Card.Body>
                                  <Card.Title>{title}</Card.Title>
                                </Card.Body>
                              </Card>
                            </li>
                          )}
                        </Draggable>
                      </List>
                    );
                  })}
                </Paper>

                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>

        <div class="down-box">
          <div class="list">
          <Droppable droppableId="list1">
            {(provided) => (
              <ul
                className="drop1"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Paper style={{ maxHeight: 500, overflow: "auto" }}>
                  {List1hook.map(({ id, title }, index) => {
                    return (
                      // <div class  data-bs-spy="scroll">
                      <List key={index} item xs={12}>
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <li
                              key={id}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <Card>
                                <Card.Body>
                                  <Card.Title>{title}</Card.Title>
                                </Card.Body>
                              </Card>
                            </li>
                          )}
                        </Draggable>
                      </List>
                    );
                  })}
                </Paper>

                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          </div>
          <div class="list">
          <Droppable droppableId="list2">
            {(provided) => (
              <ul
                className="drop2"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Paper style={{ maxHeight: 500, overflow: "auto" }}>
                  {List2hook.map(({ id, title }, index) => {
                    return (
                      // <div class  data-bs-spy="scroll">
                      <List key={index} item xs={12}>
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <li
                              key={id}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <Card>
                                <Card.Body>
                                  <Card.Title>{title}</Card.Title>
                                </Card.Body>
                              </Card>
                            </li>
                          )}
                        </Draggable>
                      </List>
                    );
                  })}
                </Paper>

                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          </div>

          <div class="list">
          <Droppable droppableId="list3">
            {(provided) => (
              <ul
                className="drop3"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Paper style={{ maxHeight: 500, overflow: "auto" }}>
                  {List3hook.map(({ id, title }, index) => {
                    return (
                      // <div class  data-bs-spy="scroll">
                      <List key={index} item xs={12}>
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <li
                              key={id}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <Card>
                                <Card.Body>
                                  <Card.Title>{title}</Card.Title>
                                </Card.Body>
                              </Card>
                            </li>
                          )}
                        </Draggable>
                      </List>
                    );
                  })}
                </Paper>

                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          </div>
          <div class="list">
          <Droppable droppableId="list4">
            {(provided) => (
              <ul
                className="drop4"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Paper style={{ maxHeight: 500, overflow: "auto" }}>
                  {List4hook.map(({ id, title }, index) => {
                    return (
                      // <div class  data-bs-spy="scroll">
                      <List key={index} item xs={12}>
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <li
                              key={id}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <Card>
                                <Card.Body>
                                  <Card.Title>{title}</Card.Title>
                                </Card.Body>
                              </Card>
                            </li>
                          )}
                        </Draggable>
                      </List>
                    );
                  })}
                </Paper>

                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          </div>
          
        </div>
      </DragDropContext>
    </div>
  );
}
export default Places;
// export  handleOnDragEnd;
