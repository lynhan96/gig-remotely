export const ON_UPDATE_USER_PROFILE = 'ON_UPDATE_USER_PROFILE';

const INITIAL_STATE = {
  data: {},
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ON_UPDATE_USER_PROFILE:
      return {
        data: action.payload.profile,
      };
    default:
      return state;
  }
};

export const onUpdateProfile = (profile) => ({
  type: ON_UPDATE_USER_PROFILE,
  payload: {
    profile,
  },
});
