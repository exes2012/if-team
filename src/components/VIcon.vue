<template>
	<div v-html="path"></div>
</template>

<script>
import icons from "@/assets/icons/icons";
export default {
	name: "VIcon",
	props:['name'],
	data(){
		return{
		}
	},
	computed:{
		path(){
			return icons[this.name]
		}
	}
}
</script>