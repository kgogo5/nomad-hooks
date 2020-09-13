import React from "react";
import { COM, DEL, DELCOM } from "../actions";
import { useDispatch } from "../context";

export default ({ text, id, isCompleted, action }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{text}</span>
      <button
        onClick={() => {
          console.log(action);
          if (window.confirm("완료 하시겠습니까?")) {
            dispatch({ type: action === COM ? COM : DELCOM, isCompleted: id });
          }
        }}
      >
        V
      </button>
      <button
        onClick={() => {
          if (window.confirm("삭제 하시겠습니까?")) {
            dispatch({ type: DEL, isCompleted: id });
          }
        }}
      >
        X
      </button>
    </li>
  );
};
