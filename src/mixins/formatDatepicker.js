export const formatDatepicker = {
    computed: {
        useFormatDate() {
            return (date) => {
                const day = () => {
                    if (date.getDate() < 10) {
                        return "0" + date.getDate();
                    } else {
                        return date.getDate();
                    }
                }
                const month = () => {
                    if (date.getMonth() + 1 < 10) {
                        return "0" + (date.getMonth() + 1);
                    } else {
                        return date.getMonth() + 1;
                    }
                }
                const year = date.getFullYear();
                return `${day.value}.${month.value}.${year}`;
            }
        }
    }
}