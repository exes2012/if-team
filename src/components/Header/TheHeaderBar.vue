<template>
  <the-header-navigation :routes="routes" />
  <v-search class="field field-search h-10 w-90 ml-auto" />
  <the-header-add-button />
  <the-header-notifications />
</template>
<script>
import TheHeaderNavigation from "./TheHeaderNavigation.vue";
import TheHeaderNotifications from "./TheHeaderNotifications.vue";
import TheHeaderAddButton from "./TheHeaderAddButton.vue";
import TheHeaderAvatar from "./TheHeaderAvatarMain.vue";

export default {
  name: "TheHeaderBar",
  components: {
    TheHeaderNavigation,
    TheHeaderNotifications,
    TheHeaderAvatar,
    TheHeaderAddButton,
  },
  data() {
    return {
      routes: [
        {
          name: "Projects",
          url: "/projects",
          icon: "projects",
        },
        {
          name: "Tasks",
          url: "/tasks",
          icon: "apply",
        },
        {
          name: "Payments",
          url: "/payments",
          icon: "payments",
        },
        { name: "People", url: "/people", icon: "people" },
      ],
    };
  },
};
</script>

<style scoped></style>
