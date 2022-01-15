<template>
  <div class="forms">
    <AuthorForm v-bind="props" v-on:submitedAuthor="submitAuthor($event)" />

    <GenreForm v-bind="props" v-on:submitedGenre="submitGenre($event)" />

    <CreateBookForm
      v-bind="props"
      v-on:createdBook="createBook($event)"
      v-on:updateSelectAuthor="updateSelectAuthor($event)"
      v-on:updateSelectGenre="updateSelectGenre($event)"
    />
    <div>
      <b-table :fields="fields" striped hover :items="props.booklist">
        <template #cell(X)="{ item }">
          <b class="text-danger" @click="deleteRow(item)">X</b>
        </template>
      </b-table>
    </div>
    <div></div>
  </div>
</template>
<script>
import { required, numeric } from "vuelidate/lib/validators";
import authorForm from "./authorForm.vue";
import genreForm from "./genreForm.vue";
import createBookForm from "./createBookForm.vue";

export default {
  components: {
    AuthorForm: authorForm,
    GenreForm: genreForm,
    CreateBookForm: createBookForm,
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
      fields: [
        "title",
        "author",
        "bookID",
        "releaseYear",
        "authorID",
        "genre",
        "genreID",
        "X",
      ],
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
      console.log(this.props.selectAuthor);
    },
    submitGenre: function (event) {
      this.props.selectGenre.push(event);
    },
    createBook: function (event) {
      // console.log(this.props.booklist);
      this.props.booklist.push({
        ...event,
        author: "dupa",
        genre: "dupa",
      });
    },
    deleteRow: function (dupa) {
      const filtered = this.props.booklist.filter((test) => test !== dupa);
      this.props.booklist = filtered;
    },
    updateSelectAuthor: function (event) {
      this.props.selectedAuthor = event;
    },
    updateSelectGenre: function (event) {
      this.props.selectedGenre = event;
    },
  },
};
</script>

<style>
.forms {
  margin-left: 50px;
}
</style>
