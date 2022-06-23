<template>
	<div class="task-view">
		<div class="flex px-4">
			<div class="link-1 text-sm">Webnauts </div>
			<div class="ml-2"></div>
			<div class="link-1 text-sm">Итерация 1</div>
		</div>
		<div class="flex flex-col flex-grow items-start justify-between px-4 text-2xl mt-5">
			<input
					class="p-2 mr-2 flex-grow text-2xl w-full"
					type="text"
			:value="task.name"
					@change="updateTaskProperty($event, 'name')"
			>
		</div>
		<div class="flex px-4 mt-10">
			<div class="status status-green">In progress</div>
			<div class="ml-auto text-sm text-gray-400">Created 12 Apr 2022 at 12:43 pm</div>
		</div>
		<div class="flex flex-col px-4">
			<div>Description</div>
			<textarea :value="task.description"
			          @change="updateTaskProperty($event, 'description')"
			/>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	name: "TaskItem",
	computed:{
		...mapGetters(['getTask']),

		task(){
			return this.getTask(this.$route.params.id)
		}
	},
	methods:{
		updateTaskProperty (e, key){
			this.$store.commit('UPDATE_TASK', {
				task:this.task, key, value:e.target.value
			})
		}
	}
}
</script>

<style scoped lang="css">
.task-view{
	@apply relative flex flex-col bg-white mx-4 m-32 mx-auto py-4 text-left rounded shadow;
	max-width:700px;
}
</style>