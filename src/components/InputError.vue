<template>
  <div class="flex">
    <span v-for="error of errors" :key="error.$uid" class="message-invalid">
      <template v-if="error && error.$message"></template>
      <template v-else>{{ error }}</template>
    </span>
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
