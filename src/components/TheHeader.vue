<template>
	<div class="flex h-20 w-full bg-white">
		<v-container class="items-center">
			<the-header-logo class="mr-14"/>
			<ul class="flex">
				<li v-for="route in routes" :key="route.id" class="mr-4 bg-red-300 "><router-link :to="route.url">{{route.name}}</router-link></li>
			</ul>
		</v-container>
		</div>
</template>

<script>
import TheHeaderLogo from "./TheHeaderLogo.vue";
import VContainer from "./VContainer.vue";

export default {
	name: "TheHeader",
	components:{
		VContainer,
		TheHeaderLogo
	},
	data(){
		return{
			routes:[
				{name:'Projects', url:'/'},
				{name:'Tasks', url:'/tasks'},
				{name:'Payments', url:'/payments'},
				{name:'Login', url:'/login'},
				{name:'Register', url:'/register'},
			]
		}
	}
}
</script>

<style scoped>

</style>