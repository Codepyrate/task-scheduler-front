import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "../static-data2.json";
// import ReadTask from "../components/Task/ReadTask";
// import EditTask from "../components/Task/EditTask";
import ReadNote from "../components/note_folder/ReadNote";
// import EditNote from "../components/note_folder/EditNote";
import Header from '../components/Header'
import Footer from '../components/Footer'
const App = () => {
  const [tasks, setTasks] = useState(data);
  const [dataNotes, setDataNotes] = useState([])
 

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

  

  axios.get('https://tasks-scheduler-apps.herokuapp.com/home/notes').then(response=>{
    console.log(response.data);})
 
      

    return (
      <div>
        <Header/>
        <div className="app-container">
          <h1 id="heading">Note Manager</h1>
        <form className="task-form" onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>Note title</th>
                <th>Description</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task , index) => (
                <Fragment key="index">
                  {editTaskId === task.id ? (
                    <EditNote key="index"
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadNote key="index"
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

        <h1 className="text-3xl text-white itilic pt-12 pb-4 font-serif antialiased md:subpixel-antialiased mt-5 text-bold"> 📝Add a new Note 📝</h1>


        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0  grid  ">
          <form className="task-form" onSubmit={handleAddFormSubmit}>
            <input
              className="appearance-none block w-full bg-white text-teal-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200"
              type="text"
              name="TaskTitle"
              required="required"
              placeholder="Enter Note title..."
              onChange={handleAddFormChange}
            />
            <input
              className="appearance-none block w-full bg-white-300 text-teal-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200"
              type="text"
              name="Description"
              required="required"
              placeholder="Add a description..."
              onChange={handleAddFormChange}
            />
            <input
              className="appearance-none block w-full bg-white text-teal-700 border border-teal-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200"
              type="time"
              name="TaskTime"
              required="required"
              placeholder="Add Node..."
              onChange={handleAddFormChange}
            />

            <button type="submit" className="bg-teal-600 ml-10 hover:bg-teal-200 text-white font-bold py-2 px-3 rounded-full" >
              ADD
            </button>
          </form>
          
        


        </div>


        <Footer />

      </div>
      
    </div>
  );
};

export default App;
