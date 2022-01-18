<template>
  <div></div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null,
    };
  },
  async mounted() {
    axios
      .get("https://wolnelektury.pl/api/books/")
      .then((response) => this.$emit("fetchBooks", response.data));
  },
};
</script>

<style></style>
