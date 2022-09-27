<template>
	<data-table
			:value="tableData"
			:rowHover="true"
	>
		<column v-for="column in columns"
		        :field="column.field"
		        :header="column.header"
		        :footer="column.footer">
		</column>
	</data-table>
</template>

<script>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Row from 'primevue/row'

export default {
	name: "Vtable",
	components:{
		DataTable,
		Column,
		Row
	},
	props: {
		tableData: {
			type: Array,
			default: () => [],
		},
		columns: {
			type: Array,
			default: () => [],
		},
	},
}
</script>

<style scoped>

</style>