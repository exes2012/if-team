<template>
	<the-header-navigation :routes="routes"/>
	<v-search class="field field-search h-10 w-90 ml-auto"/>
	<button class="btn-primary h-12 w-32 ml-10">
		<i class="icon-add"></i>
		Add
	</button>
</template>
<script>
import TheHeaderNavigation from "./TheHeaderNavigation.vue";
import VSearch from "./VSearch.vue";

export default {
	name: "TheHeaderBar",
	components:{
		TheHeaderNavigation,
		VSearch
	},
	data() {
		return {
			routes: [
				{name: "Projects", url: "/", icon:'icon-projects'},
				{name: "Tasks", url: "/tasks", icon:'icon-check'},
				{name: "Payments", url: "/payments", icon:'icon-payments'},
				{name: "People", url: "/people", icon:'icon-people'},
			],
		};
	}
}
</script>

<style scoped>

</style>