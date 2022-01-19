<template>
  <div>
    <div>
      <b-tab class="genres" title="Genres" @click="fetch">
        <div class="test">
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
import { fetchGenre } from "../services/genreService";
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
      fetchGenre().then(
        (response) => (this.fetchedData = this.fetchedData = response.data)
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
.genres__btn {
  height: 20px;
}
.genres {
  flex-direction: column;
  flex-wrap: wrap;
  display: flex;
  height: 100%;
  align-items: flex-start;
}
</style>

<!--    createPaginated(data) {
      this.totalPages = Math.floor(data.length / this.perPage);
      for (var i = 0; i < this.totalPages; i++) {
        const start = i * this.perPage;
        this.paginatedGenrelist.push(data.slice(start, start + this.perPage));
      }
      return this.totalPages;
    }, !-->
