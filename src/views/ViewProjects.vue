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
					<vtable :columns="this.$store.state.tableColumns.projectsTableColumns" :table-data="this.$store.state.projects.projectsList"/>
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
import Vtable from "../components/Vtable.vue";
import {mapState} from "vuex";


export default {
	name: "ViewProjects",
	components:{
		VCard,
		VContainer,
		VSearch,
		VCheckbox,
		Vtable
	},

	methods:{
		...mapState(['tableColumns/projectsTableColumns'])
	}
}
</script>

<style scoped lang="scss">
:deep(.p-datatable-wrapper) {
	.p-datatable-thead {
		tr{
			th{
				padding-bottom: 24px;
				font-weight: 400;
				font-size: 12px;
				line-height:16.8px;
				color: #ACB2C3;
			}
		}
	}
	.p-datatable-tbody {
		tr {
			height: 50px;
			font-weight: 400;
			font-size: 14px;
			color: #303139;
			border-bottom: 1px solid #D7DAE3;
		}
	}
}
</style>