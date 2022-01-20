<template>
  <div>
    <div>
      <b-tab class="authors" title="Authors" @click="fetch">
        <div>
          <Table
            :current-page="currentPage"
            :per-page="perPage"
            id="my-table"
            :fields="fields"
            :items="fetchedData"
          />
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            first-text="First"
            prev-text="Prev"
            next-text="Next"
            last-text="Last"
          ></b-pagination>
        </div>
      </b-tab>
    </div>
  </div>
</template>

<script>
import { fetchAuthors } from "../services/authorService";

import Table from "./Table.vue";
export default {
  components: {
    Table: Table,
  },
  data() {
    return {
      fields: ["name"],
      fetchedData: [],
      currentPage: 1,
      perPage: 10,
      totalPages: 0,
    };
  },
  methods: {
    fetch: function () {
      fetchAuthors().then(
        (response) => (this.fetchedData = response.data) /*response.data*/
      );
    },
  },
  computed: {
    rows() {
      return this.fetchedData.length;
    },
  },
};
</script>

<style>
.authors__btn {
  height: 20px;
}
.authors {
  flex-direction: column;
  flex-wrap: wrap;
  display: flex;
  height: 100%;
  align-items: flex-start;
  width: 100%;
}
</style>

<!-- createPaginated(data) {
      this.totalPages = Math.floor(data.length / this.perPage);
      for (var i = 0; i < this.totalPages; i++) {
        const start = i * this.perPage;
        this.paginatedAuthorlist.push(data.slice(start, start + this.perPage));
      }
      return this.totalPages;
    }, !-->
