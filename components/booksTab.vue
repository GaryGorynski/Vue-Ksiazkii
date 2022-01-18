<template>
  <div>
    <div class="dupa">
      <b-tab title="Books" @click="fetch">
        <a v-b-modal.modal-1 v-for="book in booklist" :key="book">
          {{ book.title }}</a
        >
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
      booklist: [],
    };
  },
  methods: {
    fetch: function () {
      fetchBooks().then((response) => (this.booklist = response.data));
    },
  },
};
</script>

<style></style>
