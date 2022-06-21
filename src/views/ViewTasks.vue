<template>
	<div>Tasks Page</div>
</template>

<script>
export default {
	name: "ViewTasks"
}
</script>

<style scoped lang="css">
.task{
	@apply flex items-center flex-wrap mb-2 py-2 px-2 rounded bg-white text-gray-900 no-underline;
}

.column{
	@apply bg-aqua-200 p-2 mr-4 text-left shadow rounded;
	min-width:350px;
}

</style>