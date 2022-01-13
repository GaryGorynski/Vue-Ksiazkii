<template>
  <div class="forms">
    <AuthorForm v-on:submitedAuthor="submitAuthor($event)" />

    <GenreForm v-on:submitedGenre="submitGenre($event)" />

    <CreateBookForm v-on:createdBook="createBook($event)" />
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
      selectedAuthor: null,
      selectedGenre: null,
      selectAuthor: [{ value: null, text: "Author" }],
      selectGenre: [{ value: null, text: "Genre" }],
      booklist: [],
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
      this.selectAuthor.push(event);
      console.log(this.selectAuthor);
    },
    submitGenre: function (event) {
      this.selectGenre.push(event);
      console.log(this.selectGenre);
    },
    createBook: function (event) {
      this.booklist.push(event);
    },
  },
};
</script>

<style>
.forms {
  margin-left: 50px;
}
</style>
