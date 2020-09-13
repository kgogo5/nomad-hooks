import React, { useState } from "react";
import { ADD } from "../actions";
import { useDispatch } from "../context";

export default () => {
  const [newToDo, setNewToDo] = useState("");
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    if (newToDo === "") {
      return console.log("할 일을 적어주세요");
    }
    dispatch({ type: ADD, newToDo });
    setNewToDo("");
  }

  function onChange(e) {
    setNewToDo(e.target.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="오늘의 할 일을 적어주세요"
        onChange={onChange}
        value={newToDo}
      />
    </form>
  );
};
