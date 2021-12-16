import React from "react";

const EditNote = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="TaskTitle"
          value={editFormData.TaskTitle}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an Description..."
          name="Description"
          value={editFormData.Description}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="time"
          required="required"
          placeholder="Enter Time..."
          name="TaskTime"
          value={editFormData.TaskTime}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit" className="text-bold   hover:bg-teal-300 ml-10  text-white font-bold py-2 px-3 rounded-full">Save</button>
        <button type="button" className="text-bold   hover:bg-red-300 ml-10  text-white font-bold py-2 px-3 rounded-full" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditNote;