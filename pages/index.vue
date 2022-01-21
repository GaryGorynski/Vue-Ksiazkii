<template>
  <div class="modals">
    <b-tabs pills card content-class="mt-3 ml-5">
      <BooksTab
        v-bind="props"
        @createdBook="updateBooklist($event)"
        @updateSelectAuthor="updateSelectAuthor($event)"
        @updateSelectGenre="updateSelectGenre($event)"
        @computedBooklist="computedBooklist($event)"
        @deleteBook="deleteBook($event)"
      />
      <AuthorsTab
        v-bind:selectAuthor="props.selectAuthor"
        v-on:submitedAuthor="submitAuthor($event)"
      />
      <GenreTab
        :selectGenre="props.selectGenre"
        @submitedGenre="submitGenre($event)"
      />
      <CollectionsTab />
    </b-tabs>
  </div>
</template>

<script>
import booksTab from "../components/booksTab.vue";
import authorsTab from "../components/authorsTab.vue";
import genresTab from "../components/genresTab.vue";
import collectionsTab from "../components/collectionsTab.vue";
import { fetchBooks } from "../services/bookService";
export default {
  components: {
    BooksTab: booksTab,
    AuthorsTab: authorsTab,
    GenreTab: genresTab,
    CollectionsTab: collectionsTab,
  },
  created() {
    fetchBooks()
      .then((response) => (this.props.booklist = response.data))
      .catch((error) => console.log(error));
  },
  data() {
    return {
      props: {
        selectedAuthor: null,
        selectedGenre: null,
        selectAuthor: [{ value: null, text: "Author" }],
        selectGenre: [{ value: null, text: "Genre" }],
        booklist: [],
      },
    };
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
      this.props.booklist = event;
    },
  },
};
</script>

<style>
.modals {
  padding-bottom: 20px;
}
.nav {
  display: flex;
  justify-content: space-evenly;
}
</style>
