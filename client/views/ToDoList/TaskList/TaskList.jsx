import React, { useState } from "react";
import styles from "./TaskList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/button/Button";
import { addTask, removeTask, editTask, changeStatus } from "../taskSlice";
import PropTypes from "prop-types";
import { selectFilteredTasks } from "../taskSelector";
import TaskForm from "../TaskForm/TaskForm";
import TaskCard from "../TaskCard/TaskCard";

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
            <TaskCard
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
          <TaskForm
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
  filterPredicate: PropTypes.func,
};
