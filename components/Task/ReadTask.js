import React from "react";

const ReadTask = ({ task, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{task.TaskTitle}</td>
      <td>{task.Description}</td>
      <td>{task.TaskTime}</td>
      <td>
        <button
          type="button"
          className="text-bold    text-white font-bold py-2 px-3 rounded-full bg-teal-300"
          
          onClick={(event) => handleEditClick(event, task)}
        >
          Edit
        </button>
        <button type="button" className="text-bold   bg-red-300 ml-10  text-white font-bold py-2 px-3 rounded-full" onClick={() => handleDeleteClick(task.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadTask;