import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      registrationStep: 1,
      user: null,
      name:null,
      email: null,
      password:null,
      phone:null,
      avatar:null,
      dateOfBirth:'',
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
    SET_REGISTER_STEP(state, step) {
      state.registrationStep = step;
    },
    SET_REGISTER_USER_DATA(state, data){
      state.email =data.email
      state.phone =data.phone
      state.password=data.password
    },
    SET_REGISTER_USER_MAIN_INFO(state, data){
      state.name =data.fullName
      state.dateOfBirth =data.dateOfBirth
    }
  },
  actions: {
    register({ commit }, credentials) {
      return axios
        .post("https://bc.webnauts-crm.wn.staj.fun/users/create_user/", credentials)
        .then(({ data }) => {
          console.log("user data is: ", data);
        });
    },
  },
};

