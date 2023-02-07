import React from "react";
import ReactScrollableList from "react-scrollable-list";
import { useState } from "react";
import { Card } from "react-bootstrap";
// import characters from "./planner_page"
import { Grid, Paper, List } from "@mui/material";
import PlanComponents from "./planner_page";
import "./planner_pages.css";
import PlaceDetail from "./placedetail";

import { useEffect } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Places({
  places,
  navigate,
  flag,
  List1hook,
  updateList1Hook,
  List2hook,
  updateList2Hook,
  List3hook,
  updateList3Hook,
  List4hook,
  updateList4Hook,
  map,
  Mainlisthook,
  updateMainHook,
  wa,
  setwa,
  route1,
  updateroute1,
  route2,
  updateroute2,
  route3,
  updateroute3,
  route4,
  updateroute4,
}) {
  const [place, setPlace] = useState("");
  // useState(()=>{
  const [day1Dur, setday1Dur] = useState("0 h:0 m");
  const [day2Dur, setday2Dur] = useState("0 h:0 m");
  const [day3Dur, setday3Dur] = useState("0 h:0 m");
  const [day4Dur, setday4Dur] = useState("0 h:0 m");

  // },[places])
  // console.log(places);
  const google = window.google;

  function update(array, val) {
    // console.log(array);
    if (array.length > 0) {
      const waypts = [];

      for (let i = 1; i < array.length; i++) {
        waypts.push({
          location: array[i].other.geometry.location,
          stopover: true,
        });
      }
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();

      directionsService
        .route({
          origin:array[0].other.geometry.location,
          destination:array[0].other.geometry.location,
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: google.maps.TravelMode.DRIVING,
        })
        .then((response) => {
          // directionsRenderer.setDirections(response);
          // directionsRenderer.setMap(map);
          const route =(response.routes[0]);
          // console.log(response.routes[0]);
          // console.log(array[0].other.geometry.location)
          var dur = 0;
          for (let i = 0; i < route.legs.length; i++) {
            dur += route.legs[i].duration.value;
          }
          var H = dur / 60;

          var M = H % 60;
          H = H / 60;
          H = Math.floor(H);
          M = Math.floor(M);
          var s = `${H}:${M}`;

          if (val === 1) {
            setday1Dur(s);
            updateroute1(route);
            // console.log(route1);
          }
          if (val === 2) {
            setday2Dur(s);
            updateroute2(route);
            // console.log(route2);
          }
          if (val === 3) {
            setday3Dur(s);
            updateroute3(route);
          }
          if (val === 4) {
            setday4Dur(s);
            updateroute4(route);
          }
          // console.log(distance);
        })
        .catch();
    } else {
    }
    // console.log("hi");
  }

  function CardClick(props) {
    const google = window.google;
    const center = new google.maps.LatLng(props.geometry.location);
    map.panTo(center);
    return setPlace(props);
    // console.log(place)
  }

  // useEffect(() => {
  //   // setwa(Mainlisthook);
  //   console.log(JSON.stringify(List1hook));
  // }, [JSON.stringify(List1hook)]);

  const w = [];
  useEffect(() => {
    updateMainHook(places);
    if (places[0]) {
      setPlace(places[0].other);
    }
  }, [places]);

  // console.log(w);
  // console.log(List1hook);
  useEffect(() => {
    if (flag == 1) {
      navigate("/ab", { statee: { wa: wa } });
    }
  }, [flag]);

  function handleOnDragEnd(result) {
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
    // console.log(List1hook)

    update(List1hook, 1);
    update(List2hook, 2);
    update(List3hook, 3);
    update(List4hook, 4);
    // setwa(List1hook);
    // console.log(wa);
  }

  // console.log(List1hook);

  var a = 0;
  return (
    <div class="places-div">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div class="places ">
          <Droppable droppableId="main-list">
            {(provided) => (
              <ul
                className="characters "
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Paper
                  class="scrollbar scrollbar-primary"
                  style={{ minWidth: 310, maxHeight: 450, overflow: "auto" }}
                >
                  {Mainlisthook.map(({ id, title, other }, index) => {
                    return (
                      <List key={index} item xs={12}>
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <li
                              key={id}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <div
                                class="card-click"
                                onClick={() => CardClick(other)}
                              >
                                <Card>
                                  <Card.Body>
                                    <Card.Title>{title} </Card.Title>
                                  </Card.Body>
                                </Card>
                              </div>
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

          <PlaceDetail place={place} map={map} />
        </div>

        <div class="down-box">
          <div class="list list1 d-block border border-dark">
            <div>
              <h1>{day1Dur}</h1>
            </div>

            <div class=" list1-div-stay">
              <Droppable droppableId="list1">
                {(provided) => (
                  <div
                    className="drop drop1"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <Paper
                      class="paper"
                      style={{
                        margin: 0,
                        padding: 0,
                        // maxHeight: 281,
                        overflow: "auto",
                      }}
                    >
                      {List1hook.length === 0 ? (
                        <div>
                          <div class="emptytop bg-dark text-white d-flex">
                            <h5 class="emptybox-text" >Drop your Stay here</h5>
                          </div>
                          <div class="emptybot"></div>
                        </div>
                      ) : (
                        List1hook.map(({ id, title }, index) => {
                          if (index === 0) {
                            return (
                              <List key={index} item xs={8}>
                                <Draggable
                                  key={id}
                                  draggableId={id}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      class="cards"
                                      key={id}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      ref={provided.innerRef}
                                    >
                                      <Card className="darkbox bg-dark text-white">
                                        <Card.Body>
                                          <Card.Title><h3>{title}</h3></Card.Title>
                                        </Card.Body>
                                      </Card>
                                    </div>
                                  )}
                                </Draggable>
                              </List>
                            );
                          } else {
                            return (
                              // <div class  data-bs-spy="scroll">
                              <List key={index} item xs={8}>
                                <Draggable
                                  key={id}
                                  draggableId={id}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      class="cards"
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
                                    </div>
                                  )}
                                </Draggable>
                              </List>
                            );
                          }
                        })
                      )}
                    </Paper>

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>

          <div class="list list1 d-block border border-dark">
            <div>
              <h1>{day2Dur}</h1>
            </div>

            <div class=" list1-div-stay">
              <Droppable droppableId="list2">
                {(provided) => (
                  <div
                    className="drop drop2"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <Paper
                      class="paper"
                      style={{
                        margin: 0,
                        padding: 0,
                        // maxHeight: 281,
                        overflow: "auto",
                      }}
                    >
                      {List2hook.length === 0 ? (
                        <div>
                          <div class="emptytop bg-dark">
                          <div class="emptytop bg-dark text-white d-flex">
                            <h5 class="emptybox-text" >Drop your Stay here</h5>
                          </div>
                          </div>
                          <div class="emptybot"></div>
                        </div>
                      ) : (
                        List2hook.map(({ id, title }, index) => {
                          if (index === 0) {
                            return (
                              <List key={index} item xs={8}>
                                <Draggable
                                  key={id}
                                  draggableId={id}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      class="cards"
                                      key={id}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      ref={provided.innerRef}
                                    >
                                      <Card className="darkbox bg-dark text-white">
                                        <Card.Body>
                                          <Card.Title><h3>{title}</h3></Card.Title>
                                        </Card.Body>
                                      </Card>
                                    </div>
                                  )}
                                </Draggable>
                              </List>
                            );
                          } else {
                            return (
                              // <div class  data-bs-spy="scroll">
                              <List key={index} item xs={8}>
                                <Draggable
                                  key={id}
                                  draggableId={id}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      class="cards"
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
                                    </div>
                                  )}
                                </Draggable>
                              </List>
                            );
                          }
                        })
                      )}
                    </Paper>

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>

          <div class="list list1 d-block border border-dark">
            <div>
              <h1>{day3Dur}</h1>
            </div>

            <div class=" list1-div-stay">
              <Droppable droppableId="list3">
                {(provided) => (
                  <div
                    className="drop drop3"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <Paper
                      class="paper"
                      style={{
                        margin: 0,
                        padding: 0,
                        // maxHeight: 281,
                        overflow: "auto",
                      }}
                    >
                      {List3hook.length === 0 ? (
                        <div>
                          <div class="emptytop bg-dark">
                          <div class="emptytop bg-dark text-white d-flex">
                            <h5 class="emptybox-text" >Drop your Stay here</h5>
                          </div>
                          </div>
                          <div class="emptybot"></div>
                        </div>
                      ) : (
                        List3hook.map(({ id, title }, index) => {
                          if (index === 0) {
                            return (
                              <List key={index} item xs={8}>
                                <Draggable
                                  key={id}
                                  draggableId={id}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      class="cards"
                                      key={id}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      ref={provided.innerRef}
                                    >
                                      <Card className=" darkbox bg-dark text-white ">
                                        <Card.Body>
                                          <Card.Title><h3>{title}</h3></Card.Title>
                                        </Card.Body>
                                      </Card>
                                    </div>
                                  )}
                                </Draggable>
                              </List>
                            );
                          } else {
                            return (
                              // <div class  data-bs-spy="scroll">
                              <List key={index} item xs={8}>
                                <Draggable
                                  key={id}
                                  draggableId={id}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      class="cards"
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
                                    </div>
                                  )}
                                </Draggable>
                              </List>
                            );
                          }
                        })
                      )}
                    </Paper>

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
          <div class="list list1 d-block border border-dark">
            <div>
              <h1>{day4Dur}</h1>
            </div>

            <div class=" list1-div-stay">
              <Droppable droppableId="list4">
                {(provided) => (
                  <div
                    className="drop drop4"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <Paper
                      class="paper"
                      style={{
                        margin: 0,
                        padding: 0,
                        // maxHeight: 281,
                        overflow: "auto",
                      }}
                    >
                      {List4hook.length === 0 ? (
                        <div>
                          <div class="emptytop bg-dark">
                          <div class="emptytop bg-dark text-white d-flex">
                            <h5 class="emptybox-text" >Drop your Stay here</h5>
                          </div>
                          </div>
                          <div class="emptybot"></div>
                        </div>
                      ) : (
                        List4hook.map(({ id, title }, index) => {
                          if (index === 0) {
                            return (
                              <List key={index} item xs={8}>
                                <Draggable
                                  key={id}
                                  draggableId={id}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      class="cards"
                                      key={id}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      ref={provided.innerRef}
                                    >
                                      <Card className="darkbox bg-dark text-white">
                                        <Card.Body>
                                          <Card.Title><h3>{title}</h3></Card.Title>
                                        </Card.Body>
                                      </Card>
                                    </div>
                                  )}
                                </Draggable>
                              </List>
                            );
                          } else {
                            return (
                              // <div class  data-bs-spy="scroll">
                              <List key={index} item xs={8}>
                                <Draggable
                                  key={id}
                                  draggableId={id}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      class="cards"
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
                                    </div>
                                  )}
                                </Draggable>
                              </List>
                            );
                          }
                        })
                      )}
                    </Paper>

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}
export default Places;
