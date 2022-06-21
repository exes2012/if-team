<template>
	<input class="checkbox" type="checkbox" :value="value">
	<label>{{label}}</label>
</template>

<script>
export default {
	name: "VCheckbox",
	props:{
		label:{
			type:String,
			default:'',
		},
		value:{
			type:String,
			default:'',
		},
	}
}
</script>

<style scoped lang="css">
.checkbox {
	@apply absolute
	-z-10
	opacity-0;
}

 .checkbox + label {
	@apply cursor-pointer
	select-none
	flex
	items-center
	before:content-['']
	before:inline-block
	before:w-[15px]
	before:h-[15px]
	before:bg-gray-100
	before:rounded-[3px]
	before:border
	before:border-solid
	before:border-transparent
	before:mr-2
	hover:before:border-blue-400
	transition;
}

.checkbox:checked + label {
	@apply before:bg-blue-400
	before:bg-[url('../assets/img/icons/check-mark.svg')]
	before:bg-center;
}
</style>