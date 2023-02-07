import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Card, List,Paper } from "@mui/material";
// import Paper from "@mui/material";
// import List from "@mui/material";
function DropBox({
  List1hook,
  updateList1Hook,
  List2hook,
  updateList2Hook,
  List3hook,
  updateList3Hook,
  List4hook,
  updateList4Hook,
  Mainlisthook,
  handleOnDragEnd,
  updateMainHook,
  setwa,
}) {
  // function handleOnDragEnd(result) {
  //     const { source, destination } = result;
  //     if (!destination) return;
  //     if (
  //       destination.droppableId === source.droppableId &&
  //       destination.index === source.index
  //     ) {
  //       return;
  //     }
  //     var add,
  //       mainList = Mainlisthook,
  //       list1 = List1hook,
  //       list2 = List2hook,
  //       list3 = List3hook,
  //       list4 = List4hook;
  //     if (source.droppableId === "main-list") {
  //       add = mainList[source.index];
  //       mainList.splice(source.index, 1);
  //     } else if (source.droppableId === "list1") {
  //       add = list1[source.index];
  //       list1.splice(source.index, 1);
  //     } else if (source.droppableId === "list2") {
  //       add = list2[source.index];
  //       list2.splice(source.index, 1);
  //     } else if (source.droppableId === "list3") {
  //       add = list3[source.index];
  //       list3.splice(source.index, 1);
  //     } else if (source.droppableId === "list4") {
  //       add = list3[source.index];
  //       list4.splice(source.index, 1);
  //     }

  //     if (destination.droppableId === "main-list") {
  //       mainList.splice(destination.index, 0, add);
  //     } else if (destination.droppableId === "list1") {
  //       list1.splice(destination.index, 0, add);
  //     } else if (destination.droppableId === "list2") {
  //       list2.splice(destination.index, 0, add);
  //     } else if (destination.droppableId === "list3") {
  //       list3.splice(destination.index, 0, add);
  //     } else if (destination.droppableId === "list4") {
  //       list4.splice(destination.index, 0, add);
  //     }

  //     updateMainHook(mainList);
  //     updateList1Hook(list1);
  //     updateList2Hook(list2);
  //     updateList3Hook(list3);
  //     updateList4Hook(list4);

  //     setwa(List1hook);
  //   }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div class="down-box">
          <div class="list border border-dark">
          <Droppable droppableId="list1">
            {(provided) => (
              <div
                className="drop drop1"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
             
                <Paper class="paper" style={{margin:0,padding:0,  maxHeight: 281, overflow: "auto" }}>
                  {List1hook.map(({ id, title }, index) => {
                    return (
                      // <div class  data-bs-spy="scroll">
                      <List key={index} item xs={8} >
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <div class="cards"
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
                  })}
                </Paper>

                {provided.placeholder}
              </div>
            )}
          </Droppable>
          </div>
          <div class="list border border-dark">
          <Droppable droppableId="list2">
            {(provided) => (
              <div
                className="drop drop2"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Paper  class="paper" style={{ maxWidth:200, maxHeight: 281, overflow: "auto" }}>
                  {List2hook.map(({ id, title }, index) => {
                    return (
                      // <div class  data-bs-spy="scroll">
                      <List key={index} item xs={12}>
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <div class="cards"
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
                  })}
                </Paper>

                {provided.placeholder}
              </div>
            )}
          </Droppable>
          </div>

          <div class="list border border-dark">
          <Droppable droppableId="list3">
            {(provided) => (
              <div
                className="drop drop3"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Paper  class="paper" style={{ maxHeight: 281, overflow: "auto" }}>
                  {List3hook.map(({ id, title }, index) => {
                    return (
                      // <div class  data-bs-spy="scroll">
                      <List key={index} item xs={12}>
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <div  class="cards"
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
                  })}
                </Paper>

                {provided.placeholder}
              </div>
            )}
          </Droppable>
          </div>
          <div class="list border border-dark">
          <Droppable droppableId="list4">
            {(provided) => (
              <div
                className="drop drop4"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Paper  class="paper" style={{ maxHeight: 281, overflow: "auto" }}>
                  {List4hook.map(({ id, title }, index) => {
                    return (
                      // <div class  data-bs-spy="scroll">
                      <List key={index} item xs={12}>
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <div class="cards"
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
                  })}
                </Paper>

                {provided.placeholder}
              </div>
            )}
          </Droppable>
          </div>
          
        </div>
    </DragDropContext>
  );
}
export default DropBox;
