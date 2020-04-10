import React from "react";

const Task=( { task: {id, title, state}, onArchiveTask, onPinTask } )=>{
    return(
        <div>
            <input type="text" value={title} readOnly={true} />
        </div>
    );
};

export default Task;