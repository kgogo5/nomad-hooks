import { v4 as uuid } from "uuid";
import { ADD, COM, DEL, DELCOM } from "./actions";

export const initialState = {
  toDos: [],
  comToDos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.newToDo, id: uuid() }],
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.isCompleted),
        comToDos: state.comToDos.filter(
          (toDo) => toDo.id !== action.isCompleted
        ),
      };
    case COM:
      const target = state.toDos.find((toDo) => toDo.id === action.isCompleted);
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.isCompleted),
        comToDos: [...state.comToDos, { ...target }],
      };
    case DELCOM:
      return {
        ...state,
        comToDos: state.comToDos.filter(
          (toDo) => toDo.id !== action.isCompleted
        ),
      };
    default:
      return;
  }
};

export default reducer;
