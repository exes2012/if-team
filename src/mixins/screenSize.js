export default {
    data() {
        return {
            screenSize: ''
        }
    },
    mounted() {
        window.addEventListener('resize', this.testWidth)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.testWidth)
    },
    methods: {
        testWidth() {
            if (window.innerWidth <= 639) {
                this.screenSize = 'sm'
            }
            if (window.innerWidth > 639 && window.innerWidth <= 767) {
                this.screenSize = 'md'
            }
            if (window.innerWidth > 767 && window.innerWidth <= 1023) {
                this.screenSize = 'lg'
            }
            if (window.innerWidth > 1023 && window.innerWidth <= 1279) {
                this.screenSize = 'xl'
            }
            if (window.innerWidth > 1279 && window.innerWidth <= 1535) {
                this.screenSize = '2xl'
            }
            if (window.innerWidth > 1535) {
                this.screenSize = '3xl'
            }
        }
    }
}