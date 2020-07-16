export const ON_CLOSE_ALERT = 'ON_CLOSE_ALERT';
export const ON_OPEN_ALERT = 'ON_OPEN_ALERT';

const INITIAL_STATE = {
  open: false,
  message: '',
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ON_CLOSE_ALERT:
      return {
        open: false,
        message: '',
      };
    case ON_OPEN_ALERT:
      return {
        open: true,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export const onCloseAlert = () => ({
  type: ON_CLOSE_ALERT,
});

export const onOpenAlert = (message) => ({
  type: ON_OPEN_ALERT,
  payload: {
    message,
  },
});
