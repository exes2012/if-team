<template>
  <v-modal-card title="Invite an employee" width="700">
    <div class="w-full flex flex-col mt-4">
      <div class="flex relative">
        <div
          class="tab"
          v-for="tab in tabs"
          :key="tab.id"
          @click="activateTab(tab)"
          :class="{ active: activeTab === tab.id }"
        >
          {{ tab.name }}
        </div>
        <div class="w-full h-[1px] flex bg-gray-200 absolute bottom-0"></div>
      </div>
      <div v-if="activeTab === 1">
        <div class="flex mt-5">
          <invite-email-item email="exes2012@gmail.com" />
        </div>
        <v-input
          label="Email of employee"
          placeholder="Enter email and press the enter button"
          class="mt-4"
          v-model="tabOneEmailInput"
        />
        <v-button class="add-button">+ Add another</v-button>
        <v-button class="btn-primary w-[188px] h-[50px] mt-7"
          >Send invite</v-button
        >
      </div>
      <div v-if="activeTab === 2">
        <div class="mt-5 flex"></div>
        <div class="flex mt-5">
          <v-select label="Department" class="w-full mr-2.5" />
          <v-select label="Division" class="w-full ml-2.5" />
        </div>
        <v-input
          label="Email of employee"
          placeholder="Enter email and press the enter button"
          class="mt-4"
        />
        <v-button class="add-button">+ Add another</v-button>
        <v-button class="btn-primary w-[188px] h-[50px] mt-7"
          >Send invite</v-button
        >
      </div>
    </div>
  </v-modal-card>
</template>

<script>
import InviteEmailItem from "./InviteEmailItem.vue";
export default {
  name: "AdminInvitePopup",
  components: {
    InviteEmailItem,
  },

  data() {
    return {
      activeTab: 1,
      tabOneEmailInput: "",
      tabOneEmailsList: [],
      tabTwoEmailsList: [],
      tabs: [
        { name: "Invite with email", id: 1 },
        { name: "Invite with department/group", id: 2 },
      ],
    };
  },
  methods: {
    activateTab(tab) {
      this.activeTab = tab.id;
    },
    tabOnePushEmail() {
      this.tabOneEmailsList.push(this.tabOneEmailInput)
    },
  },
};
</script>

<style scoped>
.tab {
  @apply px-10 py-2.5 cursor-pointer hover:bg-gray-100;
}

.active {
  @apply text-blue-400 border-b-2 border-b-blue-400;
}

.add-button {
  @apply text-gray-500 text-xs font-semibold hover:text-blue-400;
}
</style>
