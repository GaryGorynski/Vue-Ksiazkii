<template>
  <div>
    <div>
      <b-tab title="Books" @click="fetch">
        <ol>
          <li
            class="dupa"
            v-b-modal.modal-1
            v-for="book in paginatedBooklist[1]"
            :key="book.id"
          >
            {{ book.title }}
          </li>
        </ol>

        <b-modal id="modal-1">
          <template #modal-header> Tytuł książki </template>
          <template #modal-footer>
            <a href="#" id="modalAudio">Pobierz Audiobook</a>
          </template>
        </b-modal>
      </b-tab>
    </div>
  </div>
</template>

<script>
import { fetchBooks } from "../services/bookService";

export default {
  data() {
    return {
      fetchedData: [],
      currentPage: 0,
      perPage: 10,
      paginatedBooklist: [],
      totalPages: 0,
    };
  },
  methods: {
    fetch: function () {
      fetchBooks().then(
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
        this.paginatedBooklist.push(data.slice(start, start + this.perPage));
      }
      console.log(this.paginatedBooklist);
    },
  },
};
</script>

<style>
.dupa {
  margin-bottom: 10px;
  width: 250px;
  height: 30px;
}
</style>
