import React from "react";
import Add from "./Add";
import { useState } from "../context";
import List from "./List";
import ToDo from "./ToDo";
import { COM, DEL, DELCOM } from "../actions";

function App() {
  const { toDos, comToDos } = useState();
  return (
    <>
      <h1>오늘의 할일</h1>
      <Add />
      <List>
        {toDos.map((toDo) => {
          return (
            <ToDo key={toDo.id} id={toDo.id} text={toDo.text} action={COM} />
          );
        })}
      </List>

      <h2>완료된 할일</h2>
      <List>
        {comToDos.length !== 0
          ? comToDos.map((comToDo) => {
              return (
                <ToDo
                  key={comToDo.id}
                  id={comToDo.id}
                  text={comToDo.text}
                  action={DELCOM}
                />
              );
            })
          : null}
      </List>
    </>
  );
}

export default App;
