import React, {useEffect, useState} from "react";
import Profile from "./profile";
import Progress from "./progress";
import TaskCard from "./taskCard";
import Notification from "./Notification.jsx";



function Task(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5500/task")
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    return (
        <div className="task-page">
            <div className="sidebar">
                <div className="sidebar-top">
                <Profile />
                <Notification />
                </div>
            </div>
            <div className="task-body">
                <h1 style={{ marginBottom: "5px" }}>👋 Welcome {props.username}</h1>
                <p className="paragraph" style={{ marginTop: "0px" }}>
                    Here is your goal for today
                </p>
                <Progress />
                Today's Tasks
                {tasks.map(task =>(
                    <TaskCard task= {task.task} category={task.category} />
                ))}
                
            </div>
        </div>
    );
}

export default Task;
