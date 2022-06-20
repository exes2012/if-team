import {createStore} from "vuex";
import tableColumns from './modules/tablesColumns'
import projects from './modules/projects'

export default createStore({
    modules:{
        tableColumns,
        projects,
    }
})
