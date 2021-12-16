import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "../static-data.json";
import ReadTask from "../components/Task/ReadTask";
import EditTask from "../components/Task/EditTask";
import Header from '../components/Header'
import Clock from "../components/Clock";
const App = () => {

  const interval = setInterval(function() {
    console.log('hello');
  }, 5000);

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

    const newTask = {
      id: nanoid(),
      TaskTitle: addFormData.TaskTitle,
      Description: addFormData.Description,
      TaskTime: addFormData.TaskTime,
    };

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
              <Fragment key="index">
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


      <Clock task={newTask.time}/>
    </div>
    
  );
};

export default App;