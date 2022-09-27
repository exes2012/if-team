import EventService from "../../../services/EventService";

export default {
    namespaced: true,
    actions: {
        sendEmail({commit}, data) {
            return new Promise((resolve, reject) => {
                return EventService.postEvent("/auth/send_recovery", data)
                    .then(({data}) => {
                        resolve({data})
                    })
                    .catch(error => {
                        reject(error.response.data.errors)
                        console.log(error.response.data.errors)
                    })
            })
        },
    }
}
