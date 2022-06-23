<template>
  <v-drop @drop.self="moveTaskOrColumn">
    <v-drag
      :transfer-data="{
        type: 'task',
        fromColumnIndex: columnIndex,
        fromTaskIndex: taskIndex,
      }"
      class="task"
      @click="goToTask(task)"
    >
      <span class="text-3">{{ task.name }}</span>
    </v-drag>
  </v-drop>
</template>

<script>
import movingTaskAndColumnsMixin from "../mixins/movingTaskAndColumnsMixin";
import VDrag from "./VDrag.vue";
import VDrop from "./VDrop.vue";

export default {
  name: "KanbanColumnTask",
  components: {
    VDrop,
    VDrag,
  },
  mixins: [movingTaskAndColumnsMixin],
  props: {
    task: {
      type: Object,
      required: true,
    },
    taskIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    goToTask(task) {
      this.$router.push({ name: "task", params: { id: task.id } });
    },
  },
};
</script>

<style scoped lang="css">
.task {
  @apply flex items-center flex-wrap mb-2 py-2 px-2 rounded bg-white text-gray-900 no-underline cursor-pointer;
}
</style>
