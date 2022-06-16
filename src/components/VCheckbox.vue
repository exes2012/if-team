<template>
	<label><input type="checkbox" :value="value">{{label}}</label>

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

<style>

</style>