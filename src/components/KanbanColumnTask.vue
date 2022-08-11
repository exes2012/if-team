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
      <div class="flex flex-col">
        <kanban-column-task-parent-name title="В этом варианте из всего текста получится только одна строка с многоточия"/>
        <span class=""></span>
        <span class="text-2 mb-2.5 text-gray-900">{{ task.name }}</span>
        <kanban-column-task-progress time-plan=120 time-used=60 />
        <kanban-column-task-end-date/>
      </div>
    </v-drag>
  </v-drop>
</template>

<script>
import movingTaskAndColumnsMixin from "../mixins/movingTaskAndColumnsMixin";
import KanbanColumnTaskEndDate from "./KanbanColumnTaskEndDate.vue";
import KanbanColumnTaskProgress from "./KanbanColumnTaskProgress.vue";
import KanbanColumnTaskParentName from "./KanbanColumnTaskParentName.vue";
import VDrag from "./VDrag.vue";
import VDrop from "./VDrop.vue";

export default {
  name: "KanbanColumnTask",
  components: {
    VDrop,
    VDrag,
    KanbanColumnTaskEndDate,
    KanbanColumnTaskProgress,
    KanbanColumnTaskParentName
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
  @apply  w-full mb-3 p-5 rounded-xl bg-white text-gray-900 no-underline cursor-pointer;
}
</style>
