<template>
	<ul class="flex">
		<li v-for="route in routes" :key="route.id" class="mr-10 flex">
			<router-link :to="route.url" class="flex items-center">
				<v-icon :name="route.icon"/>
				<div class="text-sm ml-3">{{ route.name }}</div>
			</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	name: "TheHeaderNavigation",
	components: {},

	props:{
		routes:{
			type:Array
		}
	}
}
</script>

<style scoped>

</style>