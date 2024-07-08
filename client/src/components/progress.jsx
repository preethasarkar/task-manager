import React from "react";

function Progress() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Today's progress</span>
        <span>0%</span>
      </div>
      <br />
      <progress value={0} max={100} />
    </div>
  );
}

export default Progress;
