<template>
  <div>
    <b-form-select :value="value" v-bind="$attrs">
      <option v-for="option in options" :key="option">{{ option }}</option>
    </b-form-select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
