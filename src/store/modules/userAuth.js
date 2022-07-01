import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      user: null,
      registrationStep: 1,
    };
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorisation"
      ] = `Bearer ${userData.token}`;
    },
    SET_REGISTRATION_STEP(state, step) {
      state.registrationStep = step;
    },
  },
  actions: {
    register({ commit }, credentials) {
      return axios
        .post("//localhost:8000/register", credentials)
        .then(({ data }) => {
          console.log("user data is: ", data);
        });
    },
  },
};
