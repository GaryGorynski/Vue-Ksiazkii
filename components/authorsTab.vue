<template>
  <div>
    <div>
      <b-tab class="authors" title="Authors" @click="fetch">
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
        <b-modal id="modal-2">
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
import { fetchAuthors } from "../services/authorService";

export default {
  data() {
    return {
      fields: ["name"],
      fetchedData: [],
      currentPage: 1,
      perPage: 10,
      paginatedAuthorlist: [],
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
      fetchAuthors().then(
        (response) => (this.fetchedData = response.data) /*response.data*/
      );
    },
    createPaginated(data) {
      this.totalPages = Math.floor(data.length / this.perPage);
      for (var i = 0; i < this.totalPages; i++) {
        const start = i * this.perPage;
        this.paginatedAuthorlist.push(data.slice(start, start + this.perPage));
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
      this.currentPage = this.paginatedAuthorlist.length - 1;
    },
  },
  computed: {
    rows() {
      return this.fetchedData.length;
    },
    currentPageItems: {
      get: function () {
        return this.paginatedAuthorlist[this.currentPage];
      },
      set: function () {
        return this.paginatedAuthorlist[this.currentPage];
      },
    },
  },
};
</script>

<style>
.authors__btn {
  height: 20px;
}
.authors {
  margin-top: 0;
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
