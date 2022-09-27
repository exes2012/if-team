import EventService from "../../services/EventService";

const browserLang = navigator.language.substr(0, 2)
const lang = localStorage.getItem("lang")
let siteLang

if (lang) {
    siteLang = JSON.parse(localStorage.getItem("lang"))
} else if (browserLang) {
    siteLang = browserLang
} else {
    siteLang = 'en'
}

export default {
    namespaced: true,
    state() {
        return {
            browserLang,
            siteLang,
            languages: []
        }
    },
    mutations: {
        SET_SITE_LANG(state, lang) {
            state.siteLang = lang
            localStorage.setItem("lang", JSON.stringify(lang))
        },
        SET_LANGUAGES(state, data) {
            state.languages = data
        },
    },
    actions: {
        getLanguages({commit}) {
            return EventService.getEvent("/languages")
                .then(({data}) => {
                    commit("SET_LANGUAGES", data)
                })
                .catch(error => {
                    console.log(error)
                })
        },
    },
    getters: {
        languageActiveObj(state) {
            return state.languages.find(lang => lang.key === state.siteLang)
        }
    }
}
