import { reducerActions } from '@/actions';
import { IMessage, IState } from '@/interfaces';

const initialState: IState = {
  username: '',
  avatarColor: null,
  messages: [] as IMessage[],
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
    case 'SET_AVATAR_COLOR':
      return {
      ...state,
      avatarColor: action.payload,
    }
    default:
      return state;
  }
};

export default messagesReducer;
