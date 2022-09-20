export const passwordHide = {
    data() {
        return {
            hidePassword: true,
        }
    },
    computed: {
        passwordFieldIcon() {
            if (this.hidePassword) {
                return "eyeOpen"
            } else {
                return "eyeClose"
            }
        },
        passwordFieldType() {
            if (this.hidePassword) {
                return "password"
            } else {
                return "text"
            }
        }
    },
    methods: {
        showPassword() {
            this.hidePassword = !this.hidePassword
        }
    }
}