import React from "react";

const Tasks = ({task, setTasks, tasks, onDelete, reminder}) => {
    const deleteHandeler = (e) => {
         setTasks(tasks.filter(item => item.id !== task.id))
    }
    const checkedHandeler = () => {
        setTasks(tasks.map(item => item.id === task.id  ? {...item, reminder: !item.reminder} : item))
    }

    return (
        <div className={`task ${task.reminder ? "checked" : ""} `} onDoubleClick={checkedHandeler} >
            <div>
                <p>{task.input}</p>
                <p>{task.inputTime}</p>
            </div>
            <i onClick={() => onDelete(task.id)} className="fas fa-times" style={{cursor: "pointer"}}></i>
        </div>
    )
}

export default Tasks;