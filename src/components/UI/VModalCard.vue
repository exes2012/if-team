<template>
  <div class="fixed inset-0 z-10 bg-gray-900 bg-opacity-80">
    <div class="bg-white mx-auto my-20 p-[30px] relative flex rounded-md" :style="{width:width+'px',height:height+'px'}">
      <v-button class="absolute top-5 right-5 w-7 h-7 rounded-full hover:bg-gray-200" @click="close">
        <v-icon name="close" class="fill-gray-500"/>
      </v-button>
      <div class="flex flex-col w-full">
        <h2 class="font-medium text-grey-900">{{title}}</h2>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VModalCard",
  emits:['close'],
  props:{
    title:{
      type:String
    },
    width:{
      type:String,
      default:'400'
    },
    height: {
      type:String,
    }
  },
  methods:{
    close(){
      this.$emit('close')
    }
  }

}
</script>

<style scoped>

</style>