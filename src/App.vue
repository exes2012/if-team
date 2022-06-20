<template>
	<component :is="layout">
	</component>
</template>

<script>
import EmptyLayout from "./layouts/EmptyLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";

export default {
	components:{
		EmptyLayout,
		MainLayout
},
	computed:{
		layout(){
			return (this.$route.meta.layout || 'empty') + '-layout'
		}
	}
}
</script>

<style>

</style>
