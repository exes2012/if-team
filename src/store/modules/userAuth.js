import axios from "axios";
import EventService from "../../services/EventService";

const user = JSON.parse(localStorage.getItem("user"));

export default {
  namespaced: true,
  state() {
    return {
      registrationStep: 1,
      user: user,
      full_name: null,
      email: null,
      password: null,
      phone: null,
      photoForAvatar: null,
      photoForAvatarCropped: null,
      avatar: null,
      img: null,
      date_of_birth: "",
      isRegisterPhotoCropperActive: false,
    };
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    },
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      localStorage.setItem("user", JSON.stringify(userData));
      state.user = JSON.parse(localStorage.getItem("user"));
      axios.defaults.headers.common[
        "Authorisation"
      ] = `Bearer ${state.user.access_token}`;
    },
    SET_REGISTER_PHOTO(state, file) {
      let receivedFile = file.value;
      state.photoForAvatar = URL.createObjectURL(receivedFile);
      console.log(state.photoForAvatar);
    },
    SET_REGISTER_PHOTO_CROP_STATE(state, value) {
      state.isRegisterPhotoCropperActive = value;
    },
    SET_CROPPED_PHOTO(state, canvas) {
      canvas.toBlob((blob) => {
        state.avatar = blob;
        state.photoForAvatarCropped = URL.createObjectURL(blob);
      });
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
    CLEAR_USER_DATA(state) {
      state.user = null;
      localStorage.removeItem("user");
      axios.defaults.headers.common["Authorisation"] = null;
    },
    CATCH_LOGIN_ERROR(state, error) {
      let errorCode = error.errors;
      function getErrorMessageFromCode(errorCode) {
        switch (errorCode) {
          case "The length of name needs to be between 3 and 255":
        }
      }
    },
  },
  actions: {
    register({ commit }, credentials) {
      return EventService.postEvent("auth/register", credentials, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(({ data }) => {
        commit("SET_USER_DATA", data);
        commit("SET_REGISTER_STEP", 4);
      });
    },
    login({ commit }, credentials) {
      return EventService.postEvent("auth/login", credentials).then(
        ({ data }) => {
          commit("SET_USER_DATA", data);
        }
      );
    },
    logout({ commit }) {
      commit("CLEAR_USER_DATA");
    },
    checkCredentials({ commit }, credentials) {
      return EventService.postEvent("auth/check_credentials", credentials)
        .then(({ data }) => {
          commit("SET_REGISTER_STEP", 2);
        })
        .catch(({ error }) => {
          console.log(error.response.data.status);
        });
    },
  },
};
