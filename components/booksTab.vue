<template>
  <div>
    <div class="dupa">
      <b-tab title="Books">
        <b-button
          v-b-modal.modal-1
          variant="link"
          v-for="book in books[0]"
          :key="book.id"
        >
          {{ book.title }}
        </b-button>

        <b-modal id="modal-1">
          <template #modal-header> Tytuł książki </template>
          <template #modal-footer>
            <a href="#" id="modalAudio">Pobierz Audiobook</a>
          </template>
        </b-modal>
      </b-tab>
    </div>
    <BookService @fetchBooks="fetchBooks($event)" />
  </div>
</template>

<script>
import bookService from "../services/bookService.vue";
export default {
  components: {
    BookService: bookService,
  },
  data() {
    return {
      books: [],
      perPage: 3,
      currentPage: 1,
    };
  },
  methods: {
    fetchBooks: function (event) {
      this.books.push(event);
      console.log(this.books);
    },
  },
  computed: {
    rows() {
      return this.books.length;
    },
  },
};
</script>

<style></style>
