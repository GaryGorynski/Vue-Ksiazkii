<template>
  <div class="forms">
    <AuthorForm
      :selectAuthor="props.selectAuthor"
      v-on:submitedAuthor="submitAuthor($event)"
    />

    <GenreForm
      :selectGenre="props.selectGenre"
      v-on:submitedGenre="submitGenre($event)"
    />

    <CreateBookForm
      v-bind="props"
      v-on:createdBook="updateBooklist($event)"
      v-on:updateSelectAuthor="updateSelectAuthor($event)"
      v-on:updateSelectGenre="updateSelectGenre($event)"
    />
    <Table v-on:deleteID="deleteBook($event)" :booklist="props.booklist" />
  </div>
</template>
<script>
import { required, numeric } from "vuelidate/lib/validators";
import authorForm from "./authorForm.vue";
import genreForm from "./genreForm.vue";
import createBookForm from "./createBookForm.vue";
import Table from "./Table.vue";
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
    };
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
    },

    updateSelectAuthor: function (event) {
      this.props.selectedAuthor = event;
    },
    updateSelectGenre: function (event) {
      this.props.selectedGenre = event;
    },
    deleteBook: function (event) {
      let filteredBooklist = this.props.booklist.filter(
        (book) => book.bookID !== event
      );

      this.props.booklist = filteredBooklist;
    },
  },
};
</script>

<style>
.forms {
  margin-left: 50px;
}
</style>
