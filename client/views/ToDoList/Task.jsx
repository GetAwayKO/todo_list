import React, { useState } from "react";
import styles from "./Task.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import { addTask, removeTask, editTask } from "./tasksSlice";
const Task = ({ task }) => {
  return <div className={styles.task}>{JSON.stringify(task)}</div>;
};
const NewTask = ({ onCancel }) => {
  let [task, setTask] = useState({ title: "", description: "" });
  const dispatch = useDispatch();
  return (
    <form>
      <div className={styles.inputGroup}>
        <label>Title</label>
        <input
          value={task.title}
          onChange={(event) => {
            let newTask = { ...task };
            newTask.title = event.target.value;
            setTask(newTask);
          }}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Description</label>
        <textarea
          value={task.description}
          onChange={(event) => {
            let newTask = { ...task };
            newTask.description = event.target.value;
            setTask(newTask);
          }}
        />
      </div>
      <div className={styles.buttons}>
        <Button onClick={onCancel}>Cancel</Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              addTask({ title: task.title, description: task.description })
            );
            onCancel();
          }}
        >
          Add
        </Button>
      </div>
    </form>
  );
};

const TaskList = () => {
  const [showNewTask, setShowNewTask] = useState(false);
  const tasks = useSelector((state) => state.tasks.list);
  return (
    <div className={styles.container}>
      {tasks.map((item, index) => {
        return <Task key={index} task={item} />;
      })}
      {showNewTask && (
        <NewTask
          onCancel={() => {
            setShowNewTask(false);
          }}
        />
      )}
      <div>
        <Button
          onClick={() => {
            setShowNewTask(true);
          }}
          className={styles.addTask}
        >
          {"+"}
        </Button>
      </div>
    </div>
  );
};
export default TaskList;
