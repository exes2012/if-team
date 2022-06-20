<template>
	<the-header/>
	<router-view/>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
export default {
	name: "EmptyLayout",
	components: {
		TheHeader
	}

}
</script>

<style scoped>

</style>