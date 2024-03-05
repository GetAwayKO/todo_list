import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./TaskForm.module.scss";
import Button from "../../../components/button/Button";

const TaskForm = ({
  onCancel,
  onConfirm,
  editableTask = { title: "", description: "" },
  mode,
}) => {
  const MODE = { create: { title: "Add" }, edit: { title: "Save" } };
  let [task, setTask] = useState(editableTask);
  return (
    <form>
      <div className={styles.inputGroup}>
        <label>{"Title"}</label>
        <input
          value={task.title}
          onChange={(event) => {
            let editableTask = { ...task };
            editableTask.title = event.target.value;
            setTask(editableTask);
          }}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>{"Description"}</label>
        <textarea
          value={task.description}
          onChange={(event) => {
            let editableTask = { ...task };
            editableTask.description = event.target.value;
            setTask(editableTask);
          }}
        />
      </div>
      <div className={styles.buttons}>
        <Button onClick={onCancel}>Cancel</Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            onConfirm(task);
            onCancel();
          }}
        >
          {MODE[mode].title}
        </Button>
      </div>
    </form>
  );
};
TaskForm.propTypes = {
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  editableTask: PropTypes.object,
  mode: PropTypes.string,
};
export default TaskForm;
