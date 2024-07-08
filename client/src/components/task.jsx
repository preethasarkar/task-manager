import React from "react";
import Profile from "./profile";
import Progress from "./progress";
import TaskCard from "./taskCard";
import Notification from "./Notification.jsx";

function Task(props) {
  return (
    <div className="task-page">
      <div>
        <Profile />
        <Notification />
      </div>
      <div className="task-body">
        <h1 style={{ marginBottom: "5px" }}>👋 Welcome {props.username}</h1>
        <p className="paragraph" style={{ marginTop: "0px" }}>
          Here is your goal for today
        </p>
        <Progress />
        Today's Tasks
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
}

export default Task;
