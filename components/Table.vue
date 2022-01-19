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
      :items="items"
      :perPage="perPage"
      :currentPage="currentPage"
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
