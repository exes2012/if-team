<template>
  <div class="bg-gray-100 w-full h-screen">
    <v-container>
      <div class="flex flex-row items-start overflow-auto mt-32">
        <kanban-column
          v-for="(column, $columnIndex) of board.columns"
          :key="$columnIndex"
          :column="column"
          :columnIndex="$columnIndex"
          :board="board"
        />
        <div class="column flex">
          <input
            type="text"
            v-model="newColumnName"
            class="p-2 mr-2 flex-grow"
            placeholder="New Column Name"
            @keyup.enter="createColumn"
          />
        </div>
      </div>
    </v-container>
  </div>
  <div
    class="task-bg w-screen h-screen"
    v-if="isTaskOpen"
    @click.self="closeTask"
  >
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import KanbanColumn from "../components/KanbanColumn.vue";

export default {
  name: "ViewTasks",
  components: {
    KanbanColumn,
  },
  data() {
    return {
      newColumnName: "",
    };
  },
  methods: {
    closeTask() {
      this.$router.push({ name: "tasks" });
    },
    createColumn() {
      this.$store.commit("CREATE_COLUMN", {
        name: this.newColumnName,
      });
      this.newColumnName = "";
    },
  },

  computed: {
    ...mapState(["board"]),
    isTaskOpen() {
      return this.$route.name === "task";
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

.task-bg {
  @apply absolute top-0 left-0;
  background: rgba(0, 0, 0, 0.5);
}
</style>
