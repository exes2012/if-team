<template>
  <v-card class="w-full p-8">
    <div class="flex">
      <h2 @click="openCard">All projects</h2>
      <span class="ml-2.5 text-gray-400 text-base">15</span>
      <v-search class="field field-search h-10 w-90 ml-auto" />
    </div>
    <div class="mt-7.5">
      <vtable :columns="columns" :table-data="projects" />
    </div>
  </v-card>
  <v-modal-card @close="closeCard" v-if="isCardActive"></v-modal-card>
</template>

<script>
import VModal from "../components/VModal.vue";
import Vtable from "../components/Vtable.vue";
import VModalCard from "../components/VModalCard.vue";
export default {
  name:'ViewProjects',
  components:{
    VModal,
    Vtable,
    VModalCard,
  },
  data(){
    return{
      isCardActive:true,
      projects: this.$store.state.projects.projectsList,
      columns: this.$store.state.tableColumns.projectsTableColumns
    }
  },
  methods:{
    closeCard(){
      this.isCardActive=false
    },
    openCard(){
      this.isCardActive=true
    }
  }
}
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
