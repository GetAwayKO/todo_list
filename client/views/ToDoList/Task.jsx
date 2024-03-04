import React, { useState } from "react";
import styles from "./Task.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import { addTask, removeTask, editTask, changeStatus } from "./tasksSlice";
import PropTypes from "prop-types";
import { selectFilteredTasks, selectSortedTasks } from "./tasksSelector";

const Task = ({ task, showEdit, setShowEdit, onDelete, onEdit, onCheck }) => {
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
        <FormTask
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
Task.propTypes = {
  task: PropTypes.object,
  showEdit: PropTypes.bool,
  setShowEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onCheck: PropTypes.func,
};

const FormTask = ({
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
FormTask.propTypes = {
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  editableTask: PropTypes.object,
  mode: PropTypes.string,
};
const TaskList = ({
  filterPredicate = () => {
    return true;
  },
}) => {
  const [showEditForm, setShowEditForm] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const tasks = useSelector((state) =>
    selectFilteredTasks(state, filterPredicate)
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.container}>
        {tasks.map((item, index) => {
          return (
            <Task
              onCheck={(checkedId) => {
                dispatch(changeStatus({ id: checkedId }));
              }}
              showEdit={showEditForm}
              setShowEdit={(id) => setShowEditForm(id)}
              key={index}
              task={item}
              onDelete={(removedId) => {
                dispatch(removeTask({ id: removedId }));
              }}
              onEdit={(editableTask) => {
                dispatch(editTask(editableTask));
              }}
            />
          );
        })}
        {showCreateForm && (
          <FormTask
            onCancel={() => {
              setShowCreateForm(false);
            }}
            onConfirm={(createdTask) => {
              dispatch(addTask(createdTask));
            }}
            mode={"create"}
          />
        )}
        {!showCreateForm && (
          <div>
            <Button
              onClick={() => {
                setShowCreateForm(true);
              }}
              className={styles.addTask}
            >
              {"+"}
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
export default TaskList;
TaskList.propTypes = {
  filter: PropTypes.func,
};
