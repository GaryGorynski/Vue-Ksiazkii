<template>
  <div>
    <div>
      <b-tab class="genres" title="Genres" @click="fetch">
        <div class="test">
          <b-table
            :filter="filter"
            :filter-included-fields="filterOn"
            :fields="fields"
            :items="currentPageItems"
          >
          </b-table>

          <b-button @click="first" class="mt-20" variant="primary">{{
            buttons.first
          }}</b-button>
          <b-button @click="previous" class="mt-20" variant="primary">{{
            buttons.previous
          }}</b-button>
          <b-button @click="next" class="mt-20" variant="primary">{{
            buttons.next
          }}</b-button>
          <b-button @click="last" class="mt-20" variant="primary">{{
            buttons.last
          }}</b-button>
        </div>
        <b-modal id="modal-3">
          <template modal-header> </template>
          <template #modal-footer>
            <a href="#" id="modalAudio">Pobierz Audiobook</a>
          </template>
        </b-modal>
      </b-tab>
    </div>
  </div>
</template>

<script>
import { fetchGenre } from "../services/genreService";

export default {
  data() {
    return {
      fields: ["name"],
      filter: null,
      filterOn: [],
      fetchedData: [],
      currentPage: 0,
      perPage: 10,
      paginatedGenrelist: [],
      totalPages: 0,
      buttons: {
        first: "First",
        previous: "Previous",
        next: "Next",
        last: "Last",
      },
    };
  },
  methods: {
    fetch: function () {
      fetchGenre().then(
        (response) =>
          (this.fetchedData = this.createPaginated(
            response.data
          )) /*response.data*/
      );
    },
    createPaginated(data) {
      this.totalPages = Math.floor(data.length / this.perPage);
      for (var i = 0; i < this.totalPages; i++) {
        const start = i * this.perPage;
        this.paginatedGenrelist.push(data.slice(start, start + this.perPage));
      }
      return this.totalPages;
    },
    first: function () {
      this.currentPage = 0;
    },
    previous: function () {
      this.currentPage = this.currentPage - 1;
    },
    next: function () {
      this.currentPage = this.currentPage + 1;
    },
    last: function () {
      this.currentPage = this.paginatedGenrelist.length - 1;
    },
  },
  computed: {
    currentPageItems: {
      get: function () {
        return this.paginatedGenrelist[this.currentPage];
      },
      set: function () {
        return this.paginatedGenrelist[this.currentPage];
      },
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

.test {
  align-self: flex-start;

  margin-top: 20px;
}
</style>
