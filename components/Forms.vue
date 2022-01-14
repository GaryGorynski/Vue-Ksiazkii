<template>
  <div class="forms">
    <AuthorForm
      v-bind="authorprops"
      v-on:submitedAuthor="submitAuthor($event)"
    />

    <GenreForm v-bind="authorprops" v-on:submitedGenre="submitGenre($event)" />

    <CreateBookForm
      v-bind="authorprops"
      v-on:createdBook="createBook($event)"
      v-on:updateSelectAuthor="updateSelectAuthor($event)"
      v-on:updateSelectGenre="updateSelectGenre($event)"
    />
    <div>
      <b-table striped hover :items="items"></b-table>
    </div>
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
      authorprops: {
        selectedAuthor: null,
        selectedGenre: null,
        selectAuthor: [{ value: null, text: "Author" }],
        selectGenre: [{ value: null, text: "Genre" }],
        booklist: [],
      },
      items: [
        {
          Title: "",
          Author_first_name: "",
          Author_last_name: "",
          Book_ID: "",
          Release_year: "",
          Author_ID: "",
          Genre: "",
          Genre_ID: "",
          X: "",
        },
      ],
    };
  },
  validations: {
    book: {
      booktitle: { required },
      releaseyear: { required, numeric },
    },
  },

  methods: {
    submitAuthor: function (event) {
      this.authorprops.selectAuthor.push(event);

      console.log(this.authorprops.selectAuthor);
    },
    submitGenre: function (event) {
      this.authorprops.selectGenre.push(event);
      console.log(this.authorprops.selectGenre);
    },
    createBook: function (event) {
      this.authorprops.booklist.push(event);
      console.log(this.authorprops.booklist);
    },
    updateSelectAuthor: function (event) {
      this.authorprops.selectedAuthor = event;
    },
    updateSelectGenre: function (event) {
      this.authorprops.selectedGenre = event;
    },
  },
};
</script>

<style>
.forms {
  margin-left: 50px;
}
</style>
