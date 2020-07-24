const ON_UPDATE_USER_PROFILE = 'ON_UPDATE_USER_PROFILE';
const ON_UPDATE_USER_TALEN = 'ON_UPDATE_USER_TALEN';
const ON_UPDATE_USER_COMPANY = 'ON_UPDATE_USER_COMPANY';
const ON_RESET_USER_INFO = 'ON_RESET_USER_INFO';

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
    case ON_UPDATE_USER_COMPANY:
      state.data.company = action.payload.company;
      return state;
    case ON_RESET_USER_INFO:
      return { data: {} };
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

export const onUpdateUserCompany = (company) => ({
  type: ON_UPDATE_USER_COMPANY,
  payload: {
    company,
  },
});

export const onResetUser = () => ({
  type: ON_RESET_USER_INFO,
});
