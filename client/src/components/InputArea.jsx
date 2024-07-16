import React from "react";
import AddIcon from '@mui/icons-material/Add';


function InputArea(props) {
    return (
        <div>
            <button className="styled-button" onClick={props.onSubmit} type="button"><AddIcon/></button>
            <div className="card">
                <div className="task-content" style={{ padding: "5px" }}>
                    <input placeHolder="Add task" onChange={(event) => props.onChange1(event)} className="paragraph" style={{ backgroundColor: "#2d2b2b" }} value={props.task}></input>
                </div>
                <input placeHolder="Add category id" onChange={(event) => {
                    props.onChange2(event)
                }} className="paragraph" style={{ backgroundColor: "#2d2b2b", marginRight: "10px" }} value={props.categoryid}></input>
            </div>
        </div>
    )
}

export default InputArea;