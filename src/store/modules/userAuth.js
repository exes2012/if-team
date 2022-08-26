import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      registrationStep: 1,
      user: null,
      full_name: null,
      email: null,
      password: null,
      phone: null,
      avatar: null,
      date_of_birth: "",
      isRegisterPhotoCropperActive: false,
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
    SET_REGISTER_PHOTO_CROP_STATE(state, value) {
      state.isRegisterPhotoCropperActive = value;
    },
    SET_REGISTER_STEP(state, step) {
      state.registrationStep = step;
    },
    SET_REGISTER_USER_DATA(state, data) {
      state.email = data.email;
      state.phone = data.phone;
      state.password = data.password;
    },
    SET_REGISTER_USER_MAIN_INFO(state, data) {
      state.full_name = data.full_name;
      state.date_of_birth = data.date_of_birth;
    },
  },
  actions: {
    register({ commit }, credentials) {
      return axios
        .post("https://api.ifteam.staj.fun/auth/register", credentials)
        .then(({ data }) => {
          console.log("user data is: ", data);
          commit("SET_REGISTER_STEP", 4);
        });
    },
    checkCredentials({ commit }, credentials) {
      return axios
        .post("https://api.ifteam.staj.fun/auth/check_credentials", credentials)
        .then(({ data }) => {
          commit("SET_REGISTER_STEP", 2);
        })
        .catch(({ error }) => {
          console.log(error);
        });
    },
  },
};
