<template>
  <div>
    <b-form-input
      id="filter-input"
      v-model="filter"
      type="search"
      placeholder="Type to Search"
    ></b-form-input>
    <b-table
      :filter="filter"
      :filter-included-fields="filterOn"
      :fields="fields"
      striped
      hover
      :items="booklist"
    >
      <template #cell(X)="{ item }">
        <b class="text-danger" @click="deleteRow(item)">X</b>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    booklist: { type: Array, required: true },
  },
  data() {
    return {
      fields: [
        "title",
        "author",
        "bookID",
        "releaseYear",
        "authorID",
        "genre",
        "genreID",
        "X",
      ],
      filter: null,
      filterOn: [],
    };
  },
  computed: {
    computedBooklist: {
      get: function () {
        return this.booklist;
      },
    },
  },
  methods: {
    deleteRow: function (item) {
      const filtered = item.bookID;
      this.$emit("deleteID", filtered);
    },
  },
};
</script>

<style></style>
