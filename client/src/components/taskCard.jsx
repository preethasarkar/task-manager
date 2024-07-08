import React from "react";

function TaskCard() {
  return (
    <div className="card">
      <div className="task-content" style={{ padding: "5px" }}>
        <input type="checkbox" />
        <label className="paragraph">Cut fruits</label>
      </div>
      <p className="paragraph" style={{ padding: "15px" }}>
        Health
      </p>
    </div>
  );
}

export default TaskCard;
