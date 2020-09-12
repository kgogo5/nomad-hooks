import { v4 as uuid } from "uuid";

export const initialState = {
  toDos: [],
  comToDos: [],
};

export const ADD = "add";
export const DEL = "delete";
export const COM = "complate";
export const DELCOM = "delete Complate";

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
        toDos: state.toDos.filter((toDo) => toDo.id !== action.delCnt),
      };
    case COM:
      const target = state.toDos.find((toDo) => toDo.id === action.comCnt);
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.comCnt),
        comToDos: [...state.comToDos, { ...target }],
      };
    case DELCOM:
      return {
        ...state,
        comToDos: state.comToDos.filter((toDo) => toDo.id !== action.delCnt),
      };
    default:
      return;
  }
};

export default reducer;
