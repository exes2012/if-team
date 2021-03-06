import { createStore } from "vuex";
import tableColumns from "./modules/tablesColumns";
import projects from "./modules/projects";
import userAuth from "./modules/userAuth";
import defaultBoard from "../default-board";
import { saveStatePlugin, uuid } from "../utils";

const board = JSON.parse(localStorage.getItem("board")) || defaultBoard;
export default createStore({
  modules: {
    tableColumns,
    projects,
    userAuth,
  },
  plugins: [saveStatePlugin],
  state() {
    return {
      board: board,
    };
  },
  getters: {
    getTask(state) {
      return (id) => {
        for (const column of state.board.columns) {
          for (const task of column.tasks) {
            if (task.id === id) {
              return task;
            }
          }
        }
      };
    },
  },
  mutations: {
    CREATE_COLUMN(state, { name }) {
      state.board.columns.push({
        name,
        tasks: [],
      });
    },
    CREATE_TASK(state, { tasks, name }) {
      tasks.push({
        name,
        id: uuid(),
        description: "",
      });
    },
    UPDATE_TASK(state, { task, key, value }) {
      task[key] = value;
      // Vue.set(task, key, value)
    },
    MOVE_TASK(state, { fromTasks, toTasks, fromTaskIndex, toTaskIndex }) {
      const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0];
      toTasks.splice(toTaskIndex, 0, taskToMove);
    },
    MOVE_COLUMN(state, { fromColumnIndex, toColumnIndex }) {
      const columnList = state.board.columns;
      const columnToMove = columnList.splice(fromColumnIndex, 1)[0];
      columnList.splice(toColumnIndex, 0, columnToMove);
    },
  },
});
