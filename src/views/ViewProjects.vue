<template>
  <div class="bg-gray-100 w-full h-screen">
    <v-container>
      <v-card class="w-full mt-32">
        <div class="flex mt-14 mx-8">
          <h2>All projects</h2>
          <span class="ml-2.5 text-gray-400 text-base">15</span>
          <v-search class="field field-search h-10 w-90 ml-auto" />
        </div>
        <div class="mx-8 mt-7.5">
          <v-checkbox label="checkbox" />
          <vtable :columns="columns" :table-data="projects" />
        </div>
        <div class="m-8">
          <link-responsible></link-responsible>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import Vtable from "../components/Vtable.vue";
import VSearch from "../components/VSearch.vue";
import LinkResponsible from "../components/LinkResponsible.vue";

const store = useStore();
const projects = store.state.projects.projectsList;
const columns = store.state.tableColumns.projectsTableColumns;
</script>

<style scoped lang="scss">
:deep(.p-datatable-wrapper) {
  .p-datatable-thead {
    tr {
      th {
        padding-bottom: 24px;
        font-weight: 400;
        font-size: 12px;
        line-height: 16.8px;
        color: #acb2c3;
      }
    }
  }
  .p-datatable-tbody {
    tr {
      height: 50px;
      font-weight: 400;
      font-size: 14px;
      color: #303139;
      border-bottom: 1px solid #d7dae3;
    }
  }
}
</style>
