<template>
	<ul class="flex">
		<li v-for="route in routes" :key="route.id" class="mr-10 flex">
			<router-link :to="route.url" class="flex items-center">
				<i :class="route.icon" class="text-gray-500 text-icon mt-0.5 mr-2.5"></i>
				<div class="text-sm">{{ route.name }}</div>
			</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	name: "TheHeaderNavigation",
	props:{
		routes:{
			type:Array
		}
	}
}
</script>

<style scoped>

</style>