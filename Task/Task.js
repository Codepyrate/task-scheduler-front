import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "../static-data.json";


const App = () => {
  const [task, setTask] = useState(data);
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

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: nanoid(),
      TaskTitle: addFormData.TaskTitle,
      Description: addFormData.Description,
      TaskTime: addFormData.TaskTime,
    };

    const newTask = [...task, newTask];
    setTask(newTask);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };



  return (
    <>
    </>
  );
};

export default App;