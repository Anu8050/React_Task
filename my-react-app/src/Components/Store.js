import { createStore } from 'redux';

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        data: [...state.data, action.payload],
      };
      case 'UPDATE_DATA':
        return {
          ...state,
          data: [action.payload],
        };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;