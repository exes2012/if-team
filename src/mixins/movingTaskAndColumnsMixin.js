export default {
  props: {
    column: {
      type: Object,
      required: true,
    },
    board: {
      type: Object,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    moveTaskOrColumn(transferData) {
      if (transferData.type === "task") {
        this.moveTask(transferData);
      } else {
        this.moveColumn(transferData);
      }
    },
    moveTask({ fromColumnIndex, fromTaskIndex }) {
      const fromTasks = this.board.columns[fromColumnIndex].tasks;
      this.$store.commit("MOVE_TASK", {
        fromTasks,
        toTasks: this.column.tasks,
        fromTaskIndex,
        toTaskIndex:
          this.taskIndex !== undefined
            ? this.taskIndex
            : this.column.tasks.length,
      });
    },
    moveColumn({ fromColumnIndex }) {
      this.$store.commit("MOVE_COLUMN", {
        fromColumnIndex,
        toColumnIndex: this.columnIndex,
      });
    },
  },
};
