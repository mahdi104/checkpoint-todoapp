import React from "react";
import { useSelector } from "react-redux";
import Delete from "./Delete";

const TaskList = () => {
  const tasks = useSelector((state) => state.taskReducer.tasks);
  return (
    <div>
      {tasks.map((el) => (
        <div>
          <p>{el.name}</p>
          <Delete id={el.id} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
