<template>
  <div>
    <b-form-input
      id="filter-input"
      v-model="filter"
      type="search"
      placeholder="Type to Search"
    ></b-form-input>
    <b-table
      sticky-header
      :filter="filter"
      :filter-included-fields="filterOn"
      :fields="fields"
      striped
      hover
      :items="items"
      :perPage="perPage"
      :currentPage="currentPage"
    >
      <template #empty="scope">
        <h4>{{ scope.emptyText }}</h4>
      </template>
      <template #cell(X)="{ item }">
        <b class="text-danger" @click="deleteRow(item)">X</b>
      </template>
      <template #cell(releaseYear)>
        <b>--</b>
      </template>
      <template #cell(bookID)>
        <b>--</b>
      </template>
      <template #cell(AuthorID)>
        <b>--</b>
      </template>
      <template #cell(genreID)>
        <b>--</b>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    booklist: { type: Array, required: false },
    fields: { type: Array, required: false },
    items: { type: Array, required: false },
    perPage: { type: Number, required: false },
    currentPage: { type: Number, required: false },
  },
  data() {
    return {
      filter: null,
      filterOn: [],
    };
  },

  methods: {
    deleteRow: function (item) {
      const filtered = item.title;
      this.$emit("deleteID", filtered);
    },
  },
};
</script>

<style>
.b-table {
  table-layout: fixed;
  word-wrap: break-word;
  align-self: baseline;
  text-align: center;
}
</style>

<!-- computed: {
    computedBooklist: {
      get: function () {
        return this.booklist;
      },
    },
  },  !-->
