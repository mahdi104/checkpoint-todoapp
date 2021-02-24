import { ADD, DELETE, DONE } from "../Action/ActionType";

// initialisation

const initialisation = {
  tasks: [
    { id: Math.random(), name: "Test1", isDone: false },
    { id: Math.random(), name: "Test2", isDone: false },
    { id: Math.random(), name: "Test3", isDone: false },
  ],
};

//pure function

const taskReducer = (state = initialisation, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        tasks: state.tasks.concat([
          { id: Math.random(), name: action.payload },
        ]),
      };
    case DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== action.payload),
      };
    case DONE:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload ? { ...el, done: !el.done } : el
        ),
      };

    default:
      return state;
  }
};
export default taskReducer;
