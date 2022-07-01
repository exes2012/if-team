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
            v-model="newColumnName.value"
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

<script setup>
import KanbanColumn from "../components/KanbanColumn.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const store = useStore();
const board = computed(() => store.state.board);

const newColumnName = ref("");
const createColumn = () => {
  store.commit("CREATE_COLUMN", {
    name: newColumnName.value,
  });
  newColumnName.value = "";
};

const closeTask = () => {
  router.push({ name: "tasks" });
};

const isTaskOpen = computed(() => {
  return route.name === "task";
});
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
