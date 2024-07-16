import React from "react";


function InputArea(props) {
    return (
        <div>
            <button onClick={props.onSubmit} type="button">ADD</button>
            <div className="card">
                <div className="task-content" style={{ padding: "5px" }}>
                    <input onChange={(event) => props.onChange1(event)} className="paragraph" style={{ backgroundColor: "#2d2b2b" }} value={props.task}></input>
                </div>
                <input onChange={(event) => {
                    props.onChange2(event)
                }} className="paragraph" style={{ padding: "5px", backgroundColor: "#2d2b2b", marginRight: "5px" }} value={props.categoryid}></input>
            </div>
        </div>
    )
}

export default InputArea;