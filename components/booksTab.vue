<template>
  <div>
    <div>
      <b-tab class="books" title="Books">
        <div class="overflow-auto">
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
import { fetchBooks } from "../services/bookService";
import Table from "./Table.vue";
export default {
  components: {
    Table: Table,
  },
  data() {
    return {
      fields: ["title", "author", "kind", "genre"],
      fetchedData: [],
      currentPage: 1,
      perPage: 10,
      totalPages: 0,
    };
  },
  created() {
    fetchBooks().then((response) => (this.fetchedData = response.data));
    console.log(this.paginatedBooklist);
  },

  computed: {
    rows() {
      return this.fetchedData.length;
    },
  },
};
</script>

<style>
.books__btn {
  height: 20px;
}
.books {
  flex-direction: column;
  flex-wrap: wrap;
  display: flex;
  height: 100%;
  align-items: flex-start;
}
</style>

<!-- currentPageItems: {
      get: function () {
        return this.paginatedBooklist[this.currentPage];
      },
      set: function () {
        return this.paginatedBooklist[this.currentPage];
      },
    }, !-->
<!-- this.createPaginated( response.data )) !-->

<!--   methods: {
    createPaginated(data) {
      this.totalPages = Math.floor(data.length / this.perPage);
      for (var i = 0; i < this.totalPages; i++) {
        const start = i * this.perPage;
        this.paginatedBooklist.push(data.slice(start, start + this.perPage));
      }
      return this.totalPages;
    },
  }, !-->
