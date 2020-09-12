import React, { useState, useReducer } from "react";
import { v4 as uuid } from "uuid";

const initialState = {
  toDos: [],
};

const ADD = "add";
const DEL = "delete";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        toDos: [...state.toDos, { text: action.newToDo, id: uuid() }],
      };
    case DEL:
      return {
        toDos: state.toDos.filter((toDo) => toDo.id !== action.delCnt),
      };
    default:
      return;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");

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
    <>
      <h1>오늘의 할일</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="오늘의 할 일을 적어주세요"
          onChange={onChange}
          value={newToDo}
        />
      </form>
      <ul>
        {state.toDos.map((props) => {
          return (
            <li key={props.id}>
              <span>{props.text}</span>{" "}
              <button onClick={() => dispatch({ type: DEL, delCnt: props.id })}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
