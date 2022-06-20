<template>
	<the-header>
		<the-header-bar class="items-center"/>
	</the-header>
	<router-view/>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheHeaderBar from "../components/TheHeaderBar.vue";

export default {
	name: "MainLayout",
	components:{
		TheHeader,
		TheHeaderBar
	}
}
</script>

<style scoped>

</style>