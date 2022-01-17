<template>
  <div>
    <form class="form-horizontal">
      <div class="col-sm-12">
        <input
          class="aa form-control"
          type="text"
          id="search__form-input"
          placeholder="Find book"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get("https://wolnelektury.pl/api/books/")
      .then((response) => (this.info = response));
  },
  computed: {
    test: function () {
      let dupa = this.info;

      console.log(dupa);
    },
  },
};
</script>

<style></style>
