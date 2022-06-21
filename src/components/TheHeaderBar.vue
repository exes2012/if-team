<template>
	<the-header-navigation :routes="routes"/>
	<v-search class="field field-search h-10 w-90 ml-auto"/>
	<v-button class="btn-primary h-12 w-32 ml-10">+ Add</v-button>
	<v-button class="btn-secondary h-12 w-32 ml-10">+ Add</v-button>
	<v-button class="btn-plus h-12 w-32 ml-10"></v-button>
	<v-icon name="apply" width="32" height="32" class="fill-aqua-600 hover:fill-green-600"/>
	<the-header-notifications/>
	<the-header-avatar/>
</template>
<script>
import TheHeaderNavigation from "./TheHeaderNavigation.vue";
import TheHeaderNotifications from "./TheHeaderNotifications.vue";
import TheHeaderAvatar from "./TheHeaderAvatar.vue";
import VSearch from "./VSearch.vue";
import VButton from "./VButton.vue";
import VIcon from "./VIcon.vue";

export default {
	name: "TheHeaderBar",
	components:{
		TheHeaderNavigation,
		TheHeaderNotifications,
		TheHeaderAvatar,
		VSearch,
		VButton,
		VIcon
	},
	data() {
		return {
			routes: [
				{name: "Projects", url: "/", icon:'projects'},
				{name: "Tasks", url: "/tasks", icon:'apply'},
				{name: "Payments", url: "/payments", icon:'payments'},
				{name: "People", url: "/people", icon:'people'},
			],
		};
	}
}
</script>

<style scoped>

</style>