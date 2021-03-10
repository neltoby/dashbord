import { OPEN, CLOSE } from '../config/actions';

export const reducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case OPEN: {
      return {
        ...state,
        open: true,
      };
    }
    case CLOSE: {
      return {
        ...state,
        open: false,
      };
    }
    default:
      return state;
  }
};
