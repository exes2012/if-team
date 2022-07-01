<template>
  <div class="flex">
    <span v-for="error of errors" :key="error.$uid" class="message-invalid">{{
      error.$message
    }}</span>
  </div>
</template>

<script>
export default {
  name: "InputError",
  props: {
    errors: Array,
  },
};
</script>

<style scoped></style>
