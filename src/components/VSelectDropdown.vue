<template>
	<ul class="dropdown absolute" :style="{'width': width +'px'}">
		<slot/>
	</ul>
</template>

<script setup>
const props =defineProps({
	width:String
})
</script>

<style scoped>
.dropdown {
	@apply absolute
	top-full
	left-0
	z-20
	mt-[5px]
	py-[15px]
	bg-white
	rounded-md
	shadow-dropdown;
}

</style>