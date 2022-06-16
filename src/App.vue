<template>
	<the-header/>
	<v-container>
		<router-view/>
	</v-container>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import VContainer from "./components/VContainer.vue";

export default {
	components:{
		TheHeader,
		VContainer
}
}
</script>

<style>

</style>
