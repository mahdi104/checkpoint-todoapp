import React from "react";
import { addTask } from "../Redux/Action/ListTask";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AddTask = () => {
  const [newtask, setNewtask] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setNewtask(e.target.value);
        }}
      />

      <button
        onClick={(e) => {
          dispatch(addTask(newtask));
          e.target.value = "";
          setNewtask(e.target.value);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
