<template>
	<input type="text" :placeholder="placeholder">
</template>

<script>
export default {
	name: "VSearch",
	props:{
		placeholder:{
			type:String,
			default:'Search'
		}
	}
}
</script>

<style scoped>

</style>