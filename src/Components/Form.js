import React from 'react';

const Form = ({setInputText, setTasks, tasks, setTime, inputText,times, setReminder , reminder}) => {
    const setTaskHandeler = (e) => {
        setInputText(e.target.value);
    }
    const setTimeHandeler = (e) => {
        setTime(e.target.value);
    }
    const checkboxHandeler = (e) => {
        console.log(e.target.value)
        setReminder(e.currentTarget.checked)
    }
    const onSubmitHandeler = (e) => {
        e.preventDefault();
        setTasks([...tasks, {input: inputText, inputTime: times, reminder:reminder , id : Math.random() * 1000 }]);

        setInputText("");
        setTime("");
        setReminder(false);
    }
    


    return (
        <form className="form">
        <div>
            <label htmlFor="task">Task</label>
            <input type="text" value={inputText} onChange={setTaskHandeler} placeholder="Add Task" />
        </div>
        <div>
            <label htmlFor="day">Day and Time</label>
            <input type="text" value={times} onChange={setTimeHandeler} placeholder="Day and Time" />
        </div>
         <div className="checkbox">
             <label htmlFor="select">Remeber me
             <input type="checkbox" checked={reminder} value={reminder} onChange={checkboxHandeler} /></label>
             
         </div>
        <input type="submit"  onClick={onSubmitHandeler} value="save" />
        </form>
    )
}

export default Form;