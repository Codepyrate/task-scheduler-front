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
        <button type="submit" className="bg-green-500">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditNote;