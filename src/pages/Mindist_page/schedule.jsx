import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import "./schedule.css";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";
import mongoose from "mongoose";
import { connect } from 'mongoose';

function Schedule({ List1hook, List2hook, List3hook, List4hook }) {
  const { statee } = useLocation();
  //   const {wa}=statee;
  <h1>hello</h1>;

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  console.log(List2hook);

  function fq(e) {
    return <ListGroup.Item disabled>{e.title}</ListGroup.Item>;
  }
  return (
    //

    <div class="sce-list">
      <div class="list-comp">
        <a
          class="btn "
          data-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="collapse1"
          onClick={() => setOpen1(!open1)}
        >
          Day 1
        </a>
        <Collapse in={open1}>
          <div class="collapse" id="collapse1">
            <ListGroup>
              {List1hook.map(({ title }) => {
                return <ListGroup.Item>{title}</ListGroup.Item>;
              })}
            </ListGroup>
          </div>
        </Collapse>
      </div>

      <div class="list-comp">
        <a
          class="btn "
          data-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={() => setOpen2(!open2)}
        >
          Day 2
        </a>
        <Collapse in={open2}>
          <div class="collapse" id="collapse2">
            <ListGroup>
              {List2hook.map(({ title }) => {
                return <ListGroup.Item>{title}</ListGroup.Item>;
              })}
            </ListGroup>
          </div>
        </Collapse>
      </div>
      <div class="list-comp">
        <a
          class="btn "
          data-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={() => setOpen3(!open3)}
        >
          Day 3
        </a>
        <Collapse in={open3}>
          <div class="collapse" id="collapse3">
            <ListGroup>
              {List3hook.map(({ title }) => {
                return <ListGroup.Item>{title}</ListGroup.Item>;
              })}
            </ListGroup>
          </div>
        </Collapse>
      </div>

      <div class="list-comp">
        <a
          class="btn "
          data-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={() => setOpen4(!open4)}
        >
          Day 4
        </a>
        <Collapse in={open4}>
          <div class="collapse" id="collapse4">
            <ListGroup>
              {List4hook.map(({ title }) => {
                return <ListGroup.Item>{title}</ListGroup.Item>;
              })}
            </ListGroup>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
export default Schedule;
