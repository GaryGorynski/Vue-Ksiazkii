<template>
  <div class="forms">
    <AuthorForm v-on:submitedAuthor="submitAuthor($event)" />

    <GenreForm v-on:submitedGenre="submitGenre($event)" />

    <div id="book-creator">
      <b-row class="my-5">
        <b-col sm="6">
          <b-form-input
            v-model="book.booktitle"
            placeholder="Book title"
            type="text"
            :class="{
              'is-invalid': $v.book.booktitle.$error,
              'is-valid': !$v.book.booktitle.$invalid,
            }"
          ></b-form-input>
          <div class="invalid-feedback">
            <span v-if="!$v.book.booktitle.required" class="text-danger"
              >Book title is required</span
            >
          </div>
          <b-form-input
            :class="{
              'is-invalid': $v.book.releaseyear.$error,
              'is-valid': !$v.book.releaseyear.$invalid,
            }"
            v-model="book.releaseyear"
            placeholder="Release year"
            type="number"
          ></b-form-input>
          <div class="invalid-feedback">
            <span v-if="!$v.book.releaseyear.required" class="text-danger"
              >Release year required</span
            >
            <span v-else-if="!$v.book.releaseyear.numeric" class="text-danger"
              >Has to be a number</span
            >
          </div>

          <b-form-select v-model="selectedAuthor" :options="selectAuthor">
          </b-form-select>
          <b-form-select v-model="selectedGenre" :options="selectGenre">
          </b-form-select>
          <b-button
            variant="success"
            type="submit"
            value="create author"
            @click="createBook"
            aria-required="true"
            >Create Book</b-button
          >
        </b-col>
      </b-row>
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
    createBookForm: createBookForm,
  },
  data() {
    return {
      selectedAuthor: null,
      selectedGenre: null,
      selectAuthor: [{ value: null, text: "Author" }],
      selectGenre: [{ value: null, text: "Genre" }],
      author: {
        value: "",
        text: "",
      },

      book: {
        booktitle: "",
        releaseyear: "",
      },
      booklist: [],
    };
  },
  validations: {
    author: {
      value: { required },
      text: { required },
    },
    genre: {
      value: { required },
    },
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
    createBook: function () {
      if (
        this.book.booktitle === "" ||
        this.book.releaseyear === "" ||
        this.selectedAuthor == null ||
        this.selectedGenre == null
      ) {
        this.$v.$touch();
      } else {
        this.booklist.push({
          booktitle: this.book.booktitle,
          releaseyear: this.book.releaseyear,
          bookid: Math.floor(Math.random() * 100000),
          authorid: this.selectedAuthor,
          genreid: this.selectedGenre,
        });
      }

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
