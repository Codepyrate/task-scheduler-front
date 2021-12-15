import React from "react";

const ReadNode = ({ task, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{task.TaskTitle}</td>
      <td>{task.Description}</td>
      <td>{task.TaskTime}</td>
      <td>
        <button
          type="button"
          className="text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          onClick={(event) => handleEditClick(event, task)}
        >
          Edit
        </button>
        <button type="button" className="text-white bg-red-600 rounded-lg hover:bg-red-700" onClick={() => handleDeleteClick(task.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadNode;