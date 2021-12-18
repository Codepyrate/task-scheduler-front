import React, { useState, Fragment } from "react";
import data from "../static-data.json";
import ReadTask from "../components/Task/ReadTask";
import EditTask from "../components/Task/EditTask";
import Header from '../components/Header'
import Clock from '../components/Clock';
import axios from "axios";
const App = () => {

  const [tasksReminder,setTasksReminder] = useState([])
  const [tasks, setTasks] = useState(data);
  const [addFormData, setAddFormData] = useState({
    TaskTitle: "",
    Description: "",
    TaskTime: "",
  });

  const [editFormData, setEditFormData] = useState({
    TaskTitle: "",
    Description: "",
    TaskTime: "",
  });

  const [editTaskId, setEditTaskId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    
   

     axios.get("https://tasks-scheduler-apps.herokuapp.com/home/tasks").then(res=>{
       setTasksReminder(res.data);
      //  console.log('12/17/2021 08:42:59'); 
        console.log(res.data);
     }).catch(err=>{
       console.log(err);
     })
     

    
    const newTask = {
      
      TaskTitle: addFormData.TaskTitle,
      Description: addFormData.Description,
      TaskTime: addFormData.TaskTime,
    };
    console.log(addFormData.TaskTime.split('T'));
   
    
    // const postBody = {
      
    //   "title": addFormData.TaskTitle,
    //   "message": addFormData.Description,
    //   "date": addFormData.TaskTime.split('T')[0],
    //   "time": addFormData.TaskTime.split('T')[1],
    //   "user": 1
    // };

    // axios({method: "post",
    // url: 'https://tasks-scheduler-apps.herokuapp.com/home/tasks',
    // data: postBody}).then(res=>{console.log(res);}).catch(err=>{console.log(err);})
    
    const newTasks = [...tasks, newTask];
     

    setTasks(newTasks);
    
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedTask = {
      id: editTaskId,
      TaskTitle: editFormData.TaskTitle,
      Description: editFormData.Description,
      TaskTime: editFormData.TaskTime,
    };

    const newTasks = [...tasks];

    const index = tasks.findIndex((task) => task.id === editTaskId);

    newTasks[index] = editedTask;

    setTasks(newTasks);
    setEditTaskId(null);
  };

  const handleEditClick = (event, task) => {
    event.preventDefault();
    setEditTaskId(task.id);

    const formValues = {
      TaskTitle: task.TaskTitle,
      Description: task.Description,
      TaskTime: task.TaskTime,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditTaskId(null);
  };

  const handleDeleteClick = (taskId) => {
    const newTasks = [...tasks];

    const index = tasks.findIndex((task) => task.id === taskId);

    newTasks.splice(index, 1);

    setTasks(newTasks);
  };

  return (
    <div>
      <Header/>
      <div className="app-container">
        <h1 id="heading">Task Manager</h1>
      <form className="task-form" onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Task title</th>
              <th>Description</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task , index) => (
              <Fragment key={index}>
                {editTaskId === task.id ? (
                  <EditTask key="index"
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadTask key="index"
                    task={task}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h1>Add a new Task</h1>
      <form className="task-form" onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="TaskTitle"
          required="required"
          placeholder="Enter Task title..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Description"
          required="required"
          placeholder="Add a description..."
          onChange={handleAddFormChange}
        />
        <input
          type="datetime-local"
          name="TaskTime"
          required="required"
          placeholder="Add time..."
          onChange={handleAddFormChange}
        />
        <button type="submit" className="text-black bg-green-600 rounded-lg hover:bg-green-700">Add Task</button>
      </form>
    </div>


      <Clock tasks={tasksReminder}/>
    </div>

  );
};

export default App;