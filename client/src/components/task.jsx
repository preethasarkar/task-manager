import React, {useEffect, useState} from "react";
import Profile from "./profile";
import Progress from "./progress";
import TaskCard from "./taskCard";
import Notification from "./Notification.jsx";
import InputArea from "./InputArea.jsx";



function Task(props) {
    const [tasks, setTasks] = useState([]);
    const [newTask,setNewTask]=useState({task: "", categoryid: ""})
    const [isChange,setIsChange]=useState("false");

    useEffect(() => {
        fetch("http://localhost:5500/task")
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, [isChange]);

    function handleChange1(event){
        const newTask= event.target.value;
        setNewTask((prevTask)=>{
            return {task: newTask, categoryid: prevTask.categoryid}
        })
    }

    function handleChange2(event){
        const newCategoryId= event.target.value;
        setNewTask((prevTask)=>{
            return {task: prevTask.task, categoryid: newCategoryId}
        })
    }

    function handleSubmit() {
        fetch("http://localhost:5500/newtask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.message === "Success") {
                setNewTask({ task: "", categoryid: "" });
                setIsChange("true");
            } else {
                console.error('Error adding task:', data.error);
            }
        })
        .catch(error => console.error('Error adding task:', error));
    }

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

                <InputArea onChange1={handleChange1} onChange2={handleChange2} task={newTask.task} categoryid={newTask.categoryid} onSubmit={handleSubmit}/>

                Today's Tasks
                {tasks.map(task =>(
                    <TaskCard task= {task.task} category={task.category} />
                ))}
                
            </div>
        </div>
    );
}

export default Task;
