<template>
  <div>
    <b-tab class="books" title="Books">
      <div class="bookTab">
        <Table
          :current-page="currentPage"
          :per-page="perPage"
          id="my-table"
          :fields="fields"
          :items="props.booklist"
          v-on:deleteID="deleteBook($event)"
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
      <div class="forms">
        <AuthorForm
          :selectAuthor="props.selectAuthor"
          @submitedAuthor="submitAuthor($event)"
        />

        <GenreForm
          :selectGenre="props.selectGenre"
          @submitedGenre="submitGenre($event)"
        />

        <CreateBookForm
          v-bind="props"
          @createdBook="updateBooklist($event)"
          @updateSelectAuthor="updateSelectAuthor($event)"
          @updateSelectGenre="updateSelectGenre($event)"
        />
      </div>
    </b-tab>
  </div>
</template>

<script>
import { fetchBooks } from "../services/bookService";
import Table from "./Table.vue";
import { required, numeric } from "vuelidate/lib/validators";
import authorForm from "./authorForm.vue";
import genreForm from "./genreForm.vue";
import createBookForm from "./createBookForm.vue";
export default {
  components: {
    AuthorForm: authorForm,
    GenreForm: genreForm,
    CreateBookForm: createBookForm,
    Table: Table,
  },
  data() {
    return {
      props: {
        selectedAuthor: null,
        selectedGenre: null,
        selectAuthor: [{ value: "null", text: "Author" }],
        selectGenre: [{ value: null, text: "Genre" }],
        booklist: [],
      },
      fields: [
        { key: "title", sortable: true },
        { key: "author", sortable: true },
        { key: "bookID", sortable: true },
        { key: "releaseYear", sortable: true },
        { key: "AuthorID", sortable: true },
        { key: "genre", sortable: true },
        { key: "genreID", sortable: true },
        { key: "X", sortable: false },
      ],
      fetchedData: [],
      currentPage: 1,
      perPage: 10,
      totalPages: 0,
    };
  },
  created() {
    fetchBooks().then((response) => (this.props.booklist = response.data));
  },

  computed: {
    rows() {
      return this.props.booklist.length;
    },
  },
  validations: {
    book: {
      title: { required },
      releaseYear: { required, numeric },
    },
  },
  methods: {
    submitAuthor: function (event) {
      this.props.selectAuthor.push(event);
    },
    submitGenre: function (event) {
      this.props.selectGenre.push(event);
    },
    updateBooklist: function (event) {
      this.props.booklist.push({
        ...event,
      });
      this.props.selectedAuthor = null;
      this.props.selectedGenre = null;
    },

    updateSelectAuthor: function (event) {
      this.props.selectedAuthor = event;
    },
    updateSelectGenre: function (event) {
      this.props.selectedGenre = event;
    },
    deleteBook: function (event) {
      let filteredBooklist = this.props.booklist.filter(
        (book) => book.title !== event
      );

      this.props.booklist = filteredBooklist;
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
.bookTab {
  width: 100%;
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
