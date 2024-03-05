import React from "react";
import PropTypes from "prop-types";
import styles from "./TaskCard.module.scss";
import Button from "../../../components/button/Button";
import TaskForm from "../TaskForm/TaskForm";
const TaskCard = ({
  task,
  showEdit,
  setShowEdit,
  onDelete,
  onEdit,
  onCheck,
}) => {
  return (
    <>
      {showEdit !== task.id && (
        <div className={styles.task}>
          <input
            type="checkbox"
            checked={task.status.mark}
            onChange={() => onCheck(task.id)}
          ></input>
          <div className={styles.text}>
            <span className={styles.title}>{task.title}</span>
            <p className={styles.description}>{task.description}</p>
          </div>
          <Button
            className={styles.editBtn + " bi bi-pencil"}
            onClick={() => {
              setShowEdit(task.id);
            }}
          />
          <Button
            className={styles.deleteBtn + " bi bi-trash"}
            onClick={() => {
              onDelete(task.id);
            }}
          />
        </div>
      )}
      {showEdit === task.id && (
        <TaskForm
          onCancel={() => {
            setShowEdit(null);
          }}
          onConfirm={onEdit}
          editableTask={task}
          mode={"edit"}
        />
      )}
    </>
  );
};
TaskCard.propTypes = {
  task: PropTypes.object,
  showEdit: PropTypes.bool,
  setShowEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onCheck: PropTypes.func,
};
export default TaskCard;
