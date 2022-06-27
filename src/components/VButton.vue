<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VButton",
};
</script>

<style scoped lang="css">
button {
  @apply flex items-center justify-center transition flex-shrink-0;
}

.btn-primary {
  @apply bg-blue-400
	rounded-md
	font-sans
	font-medium
	text-base
	text-white
	shrink-0
	hover:bg-blue-700
	transition
	disabled:bg-gray-200
	disabled:text-gray-500;
}

.btn-secondary {
  @apply bg-transparent
	rounded-md
	border
	border-solid
	border-blue-400
	shrink-0

	font-sans
	font-medium
	text-base
	text-gray-900

	hover:bg-blue-700
	hover:text-white
	hover:border-transparent
	transition
	disabled:border-gray-200
	disabled:text-gray-400
	disabled:hover:bg-transparent;
}

.btn-secondary > p {
  @apply text-left
	text-2xl
	text-blue-400
	leading-0
	transition
	mr-1.5;
}

.btn-secondary:hover > p {
  @apply text-white
	transition;
}

.btn-secondary:hover svg {
  @apply fill-white;
}

.btn-secondary-2 {
  @apply block
	bg-transparent
	rounded-md
	border
	border-solid
	border-blue-400
	shrink-0
	font-sans
	font-medium
	text-xs
	text-gray-900
	hover:bg-blue-700
	hover:text-white
	hover:border-transparent
	transition
	disabled:border-gray-200
	disabled:text-gray-400
	disabled:hover:bg-transparent;
}

.btn-add-1 {
  @apply block
	py-2.5
	px-5
	bg-gray-500
	rounded-md
	shrink-0
	font-sans
	font-medium
	text-xs
	text-white
	hover:bg-blue-700
	hover:text-white
	transition
	disabled:bg-gray-200
	disabled:text-gray-500;
}

.btn-add-2 {
  @apply block
	bg-blue-400
	rounded-l-md
	shrink-0
	font-sans
	font-medium
	text-base
	text-white
	hover:bg-blue-700
	transition;
}

.btn-arrow {
  @apply bg-blue-400
	rounded-r-md
	hover:bg-blue-700
	transition;
}

.btn-arrow svg {
  @apply fill-white;
}

.btn-plus {
  @apply relative
	w-5
	h-5
	bg-gray-100
	rounded-full

	before:content-['']
	before:block
	before:w-2
	before:h-0.5
	before:bg-gray-900
	before:absolute
	before:top-[9px]
	before:left-1.5

	after:content-['']
	after:block
	after:w-0.5
	after:h-2
	after:bg-gray-900
	after:absolute
	after:top-1.5
	after:left-[9px]

	hover:bg-blue-700
	hover:before:bg-white
	hover:after:bg-white
	transition

	disabled:bg-gray-200
	disabled:before:bg-gray-500
	disabled:after:bg-gray-500;
}

.btn-plus-dropdown {
  @apply max-w-[227px]
	w-full
	rounded-md
	bg-white
	shadow-dropdown;
}

.btn-plus-dropdown li {
  @apply py-2
	px-2.5;
}

.btn-plus-dropdown a {
  @apply block
	rounded-md
	font-sans
	font-normal
	text-xs
	text-black
	py-2
	px-4
	hover:text-blue-400
	hover:bg-gray-100
	transition;
}

.btn-view-wrapper {
  @apply w-fit
	flex
	justify-center
	items-center
	border
	border-solid
	border-gray-500
	rounded-lg;
}

.btn-view {
  @apply w-[180px]
	h-13
	flex
	justify-center
	items-center
	gap-x-3.5
	font-sans
	font-normal
	text-sm
	text-gray-500
	outline-1
	outline
	outline-transparent
	rounded-md
	transition
	hover:text-blue-400;
}

.btn-view:hover svg {
  @apply fill-blue-400
	transition;
}

.btn-view.active svg {
  @apply fill-white;
}

.btn-view.active {
  @apply bg-blue-400
	text-white
	outline-blue-400;
}
</style>
