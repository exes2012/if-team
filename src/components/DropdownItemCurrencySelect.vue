<template>
	<li class="list-item">
		<div class="flex items-center">
			<v-icon :name="icon" height="13" class="mr-2.5"/>
			<div class="text-gray-900 ">
				{{value}}
			</div>
			<div class="text-gray-500">
				({{symbol}})
			</div>
		</div>
	</li>
</template>

<script setup>
const props = defineProps({
	icon:{
		type: String
	},
	value:{
		type:String,
	},
	symbol:{
		type:String
	}
})
</script>

<style scoped>
.list-item {
	@apply
	pt-[13px]
	pb-3.5
	px-5
	cursor-pointer
	hover:bg-gray-100
	transition;
}

.list-item:hover div{
	@apply text-blue-400
}
</style>