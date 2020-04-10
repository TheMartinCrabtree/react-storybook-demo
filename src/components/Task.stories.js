import React from "react";
import { action } from "@storybook/addon-actions";
import Task from "./Task";

export default {
    component: Task,
    title: "Task",
    // exports that end in "Data" are not considered stories
    excludeStories: /.*Data$/,
};

export const taskData = {
    id: "1",
    title: "test task",
    state: "TASK_INBOX",
    updatedAt: new Date(2020, 3, 10, 12, 46),
};

export const actionsData = {
    onPinTask: action("onPinTask"),
    onArchiveTask: action("onArchiveTask"),
};

export const Default=()=>{
    return <Task task={{...taskData}} {...actionsData} />
};

export const Pinned=()=>{
    return <Task task={{...taskData, state: "TASK_PINNED"}} {...actionsData} />
};

export const Archived=()=>{
    return <Task task={{...taskData, state: "TASK_ARCHIVED"}} {...actionsData} />
};

// export default function Task( { task: {id, title, state}, onArchiveTask, onPinTask } ){

//     return(
//         <div>
//             <input type="text" value={title} readOnly={true} />
//         </div>
//     );

// }

//export default Task;


