import { reducerActions } from '@/actions';
import { IState } from '@/interfaces';

const initialState: IState = {
  username: 'Guess',
  messages: [{ username: 'User1', msg: 'Hola' }],
};

const messagesReducer = (state = initialState, action: reducerActions) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: state.messages.concat(action.payload),
      };
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

export default messagesReducer;
