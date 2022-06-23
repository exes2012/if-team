<template>
  <v-drop @drop.self="moveTaskOrColumn">
    <v-drag
      class="column"
      :transfer-data="{
        type: 'column',
        fromColumnIndex: columnIndex,
      }"
    >
      <div class="column-status status-green mb-4">{{ column.name }}</div>
      <kanban-column-task
        v-for="(task, $taskIndex) of column.tasks"
        :key="$taskIndex"
        :task="task"
        :taskIndex="$taskIndex"
        :columnIndex="columnIndex"
        :column="column"
        :board="board"
      />
      <input
        type="text"
        class="block p-2 w-full bg-transparent outline-none"
        placeholder="+ Enter new task"
        @keyup.enter="createTask($event, column.tasks)"
      />
    </v-drag>
  </v-drop>
</template>

<script>
import KanbanColumnTask from "./KanbanColumnTask.vue";
import movingTaskAndColumnsMixin from "../mixins/movingTaskAndColumnsMixin";
import VDrag from "../components/VDrag.vue";
import VDrop from "./VDrop.vue";

export default {
  name: "KanbanColumn",
  components: {
    KanbanColumnTask,
    VDrag,
    VDrop,
  },
  mixins: [movingTaskAndColumnsMixin],
  methods: {
    createTask(e, tasks) {
      this.$store.commit("CREATE_TASK", {
        tasks,
        name: e.target.value,
      });
      e.target.value = "";
    },
  },
};
</script>

<style scoped lang="css">
.column {
  @apply bg-gray-300 p-2 mr-4 text-left shadow rounded;
  min-width: 300px;
  width: 300px;
}

.column-status {
  @apply h-9 w-32 flex items-center rounded font-sans font-medium text-lg pl-2.5 pr-2.5 hover:text-white transition;
}
</style>
