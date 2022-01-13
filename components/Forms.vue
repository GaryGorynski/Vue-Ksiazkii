<template>
  <div class="forms">
    <AuthorForm v-on:submitedAuthor="submitAuthor($event)" />

    <GenreForm v-on:submitedGenre="submitGenre($event)" />

    <CreateBookForm
      :selectedAuthor="selectedAuthor"
      :selectedGenre="selectedGenre"
      :selectAuthor="selectAuthor"
      :selectGenre="selectGenre"
      v-on:createdBook="createBook($event)"
    />
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
    },
    submitGenre: function (event) {
      this.selectGenre.push(event);
    },
    createBook: function (event) {
      this.booklist.push(event);
      console.log(this.booklist);
    },
  },
};
</script>

<style>
.forms {
  margin-left: 50px;
}
</style>
