import React from "react";
import Tasks from "./Tasks";

const TasksList = ({times, tasks, setTasks, reminder}) => {
    const deleteEvent = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }
    return (
        <div className="tasklist">
            {

                tasks.map(task =>
                <Tasks task={task} tasks={tasks} onDelete={deleteEvent} reminder={reminder} setTasks={setTasks} key = {task.id} />
                )   
            }
            
        </div>
    )
}

export default TasksList;