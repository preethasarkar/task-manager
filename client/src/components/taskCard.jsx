import React from "react";

function TaskCard(props) {
    return (
        <div className="card">
            <div className="task-content" style={{ padding: "5px" }}>
                <input type="checkbox" className="task-checkbox"/>
                <label className="paragraph">{props.task}</label>
            </div>
            <p className="paragraph" style={{ padding: "15px" }}>
                {props.category}
            </p>
        </div>
    );
}

export default TaskCard;
