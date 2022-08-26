<template>
<div class="cropper-area">
	<vue-cropper
			ref="cropper"
			:src="imgSrc"
			alt="Source Image"
			:viewMode="3"
			:zoomable="false"
			:aspectRatio="1/1"
	>
	</vue-cropper>
</div>
</template>

<script setup>
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'

let imgSrc= 'https://images.unsplash.com/photo-1568595502714-5a8aa68c5fd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'


</script>

<style>
.cropper-area{
	width:800px;
}

.cropper-crop-box, .cropper-view-box {
	border-radius: 50%;
}

.cropper-view-box {
	outline:inherit !important;
}

.cropper-view-box {
	box-shadow: 0 0 0 1px #39f;
	outline: 0;
}

.cropper-face {
	background-color:inherit !important;
}
</style>