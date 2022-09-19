import EventService from "../../services/EventService";
import store from "../store";

export default {
  namespaced: true,
  state() {
    return {
      name: null,
      address: null,
      logo: null,
      isTeamPhotoCropperActive: false,
      photoForLogo: null,
      photoForLogoCropped: null,
    };
  },
  mutations: {
    SET_TEAM_PHOTO(state, file) {
      let receivedFile = file.value;
      state.photoForLogo = URL.createObjectURL(receivedFile);
    },
    SET_TEAM_PHOTO_CROP_STATE(state, value) {
      state.isTeamPhotoCropperActive = value;
    },
    SET_CROPPED_PHOTO(state, canvas) {
      canvas.toBlob((blob) => {
        state.logo = blob;
        state.photoForLogoCropped = URL.createObjectURL(blob);
      });
    },
  },
  actions: {
    createTeam({ commit }, credentials) {
      return EventService.postEvent("/companies", credentials, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${store.state.userAuth.user.access_token}`,
        },
      }).then(({ data }) => {});
    },
  },
};
