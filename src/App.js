import React, { useState, useReducer } from "react";
import reducer, { initialState, ADD, DEL, COM, DELCOM } from "./reducer";

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
              <button
                onClick={() => {
                  if (window.confirm("완료 하시겠습니까?")) {
                    dispatch({ type: COM, comCnt: props.id });
                  }
                }}
              >
                V
              </button>
              <button
                onClick={() => {
                  if (window.confirm("삭제 하시겠습니까?")) {
                    dispatch({ type: DEL, delCnt: props.id });
                  }
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>

      <h2>완료된 할일</h2>
      <ul>
        {state.comToDos.map((comToDo) => (
          <li key={comToDo.id}>
            <span>{comToDo.text}</span>
            <button
              onClick={() => {
                if (window.confirm("완료된 할 일을 제거하시겠습니까?")) {
                  dispatch({ type: DELCOM, delCnt: comToDo.id });
                }
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
