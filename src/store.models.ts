export const site = {
  state: {
    loggedIn: false
  },

  reducers: {
    setLoggedIn(state, payload) {
      return {
        ...state,
        loggedIn: payload
      };
    }
  }
};
