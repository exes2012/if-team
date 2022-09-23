<template>
  <div class="flex flex-col w-full">
    <div class="flex items-center">
      <h2>Admin panel</h2>
      <v-select
        class="w-[352px] ml-7"
        :options="departments"
        :color="'white'"
        :selected="selectedDepartment"
        @select="departmentSelect"
        placeholder="Оберіть відділ"
      />
      <v-select
        class="w-[352px] ml-7"
        :options="departments"
        :color="'white'"
        :selected="selectedDepartment"
        @select="departmentSelect"
        placeholder="Оберіть посаду"
      />
      <v-button class="btn-primary ml-auto w-[188px] h-[50px]"
        >+ Invite an employee
      </v-button>
    </div>
    <v-divider-horizontal class="mt-7 mb-10" />
    <div class="flex">
      <v-card class="w-3/4 p-8 mr-5">
        <div class="flex">
          <h2>Employee</h2>
          <span class="ml-2.5 text-gray-400 text-base">15</span>
          <v-search class="field field-search h-10 w-90 ml-auto" />
        </div>
        <div class="mt-7.5">
          <vtable :columns="columns" :table-data="projects" />
        </div>
      </v-card>
      <v-card class="w-1/4 p-8 flex flex-col">
        <h2 class="mb-10">Role</h2>
        <role-list-item />
        <v-button class="w-[188px] h-[50px] btn-primary mt-7"
          >Add role
        </v-button>
      </v-card>
    </div>
  </div>
  <admin-deactivate-popup
    @close="closeDeactivatePopup"
    employee-name="Мирослава Маляр"
    employee-position="UI/UX Designer"
    v-if="isDeactivatePopupActive"
  />
  <admin-invite-popup />
</template>

<script>
import Vtable from "../components/Vtable.vue";
import VSearch from "../components/VSearch.vue";
import RoleListItem from "../components/RoleListItem.vue";
import VSelectBtn from "../components/VSelectBtn.vue";
import VToggle from "../components/VToggle.vue";
import AdminDeactivatePopup from "../components/Admin/AdminDeactivatePopup.vue";
import AdminInvitePopup from "../components/Admin/AdminInvitePopup.vue";

export default {
  name: "ViewAdmin",
  data() {
    return {
      isDeactivatePopupActive: false,
      departments: [
        { name: "Design", id: 1 },
        { name: "Frontend", id: 2 },
      ],
      selectedDepartment: "",
    };
  },
  components: {
    Vtable,
    VSearch,
    RoleListItem,
    VSelectBtn,
    VToggle,
    AdminDeactivatePopup,
    AdminInvitePopup,
  },
  methods: {
    departmentSelect(option) {
      this.selectedDepartment = option.name;
    },
    closeDeactivatePopup() {
      this.isDeactivatePopupActive = false;
    },
  },
};
</script>

<style scoped></style>
