import React, {useState} from 'react';
import Form from "./Components/Form";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TasksList from "./Components/TasksList"
import "./App.css";
const App = () => {
     const [inputText, setInputText] = useState("");
     const [times, setTime] = useState("");
     const [reminder, setReminder] = useState(false);
     const [Toggle , setToggle] = useState(false);
     const [tasks, setTasks] = useState([]);
     const addButtonHandeler = () =>{
         setToggle(!Toggle);
     }
    return (
        <div className="app-dv">
            <div className="inner-div"> 
                <Header  onToggle={addButtonHandeler} />
                {Toggle && <Form setInputText={setInputText} setTasks={setTasks} tasks={tasks} inputText={inputText} setTime={setTime} times={times} setReminder={setReminder} reminder={reminder} />}
             {tasks.length > 0 ? <TasksList times={times} tasks={tasks} setTasks={setTasks} reminder={reminder} /> : "The List is Empty!!!"}
                <Footer/>
            </div>
        </div>
    )
}

export default App;