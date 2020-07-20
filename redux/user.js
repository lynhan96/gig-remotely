export const ON_UPDATE_USER_PROFILE = 'ON_UPDATE_USER_PROFILE';
export const ON_UPDATE_USER_TALEN = 'ON_UPDATE_USER_TALEN';

const INITIAL_STATE = {
  data: {},
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ON_UPDATE_USER_PROFILE:
      return {
        data: action.payload.profile,
      };
    case ON_UPDATE_USER_TALEN:
      state.data.talent = action.payload.talent;
      return state;
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

export const onUpdateTalent = (talent) => ({
  type: ON_UPDATE_USER_TALEN,
  payload: {
    talent,
  },
});
