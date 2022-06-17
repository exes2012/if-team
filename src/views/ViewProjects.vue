<template>
	<div class="bg-gray-100 w-full h-screen">
		<v-container>
			<v-card class="w-full h-96 mt-32">
				<div class="flex mt-14 mx-8">
					<h2>All projects</h2>
					<span class="ml-2.5 text-gray-400 text-base">15</span>
					<v-search class="field field-search h-10 w-90 ml-auto"/>
				</div>
				<div class="mx-8 mt-7.5">
					<v-checkbox label="New york"/>
				</div>
			</v-card>
		</v-container>
	</div>
</template>

<script>
import VCard from "../components/VCard.vue";
import VContainer from "../components/VContainer.vue";
import VSearch from "../components/VSearch.vue";
import VCheckbox from "../components/VCheckbox.vue";

export default {
	name: "ViewProjects",
	components:{
		VCard,
		VContainer,
		VSearch,
		VCheckbox
	}
}
</script>

<style scoped>

</style>