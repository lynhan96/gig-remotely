const ON_UPDATE_USER_PROFILE = 'ON_UPDATE_USER_PROFILE';
const ON_UPDATE_USER_TALEN = 'ON_UPDATE_USER_TALEN';
const ON_UPDATE_USER_COMPANY = 'ON_UPDATE_USER_COMPANY';
const ON_UPDATE_USER_EMAIL = 'ON_UPDATE_USER_EMAIL';
const ON_RESET_USER_INFO = 'ON_RESET_USER_INFO';
const ON_UPDATE_USER_ACCOUNT_SETTING = 'ON_UPDATE_USER_ACCOUNT_SETTING';

const INITIAL_STATE = {
  loading: true,
  data: {},
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ON_UPDATE_USER_EMAIL:
      state.data.email = action.payload.email;
      return state;
    case ON_UPDATE_USER_PROFILE:
      return {
        loading: false,
        data: action.payload.profile,
      };
    case ON_UPDATE_USER_TALEN:
      state.data.talent = action.payload.talent;
      state.data.firstName = action.payload.profile.firstName;
      state.data.lastName = action.payload.profile.lastName;
      return state;
    case ON_UPDATE_USER_COMPANY:
      state.data.company = action.payload.company;
      return state;
    case ON_UPDATE_USER_ACCOUNT_SETTING:
      state.data.company.name = action.payload.accountSetting.name;
      state.data.applyNotification = action.payload.accountSetting.applyNotification;
      state.data.boostAboutToEnd = action.payload.accountSetting.boostAboutToEnd;
      state.data.boostEnded = action.payload.accountSetting.boostEnded;
      state.data.listingAboutToExpire = action.payload.accountSetting.listingAboutToExpire;
      state.data.listingExpired = action.payload.accountSetting.listingExpired;
      state.data.promotionalUpdates = action.payload.accountSetting.promotionalUpdates;
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

export const onUpdateTalent = (talent, profile) => ({
  type: ON_UPDATE_USER_TALEN,
  payload: {
    talent,
    profile,
  },
});

export const onUpdateUserCompany = (company) => ({
  type: ON_UPDATE_USER_COMPANY,
  payload: {
    company,
  },
});

export const onUpdateUserEmail = (email) => ({
  type: ON_UPDATE_USER_EMAIL,
  payload: {
    email,
  },
});

export const onResetUser = () => ({
  type: ON_RESET_USER_INFO,
});

export const onUpdateUserAccountSetting = (accountSetting) => ({
  type: ON_UPDATE_USER_ACCOUNT_SETTING,
  payload: {
    accountSetting,
  },
});
