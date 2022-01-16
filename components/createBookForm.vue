<template>
  <div id="book-creator">
    <b-row class="my-5">
      <b-col sm="6">
        <b-form-input
          v-model="$v.book.title.$model"
          placeholder="Book title"
          type="text"
        ></b-form-input>

        <p class="text-success" v-if="submitStatus === 'OK'">
          Thanks for your submission!
        </p>

        <p class="text-danger" v-if="submitStatus === 'ERROR'">
          Please fill the form correctly.
        </p>

        <b-form-input
          v-model="$v.book.releaseYear.$model"
          placeholder="Release year"
          type="text"
        ></b-form-input>
        <p class="text-success" v-if="submitStatus === 'OK'">
          Thanks for your submission!
        </p>
        <p class="text-danger" v-if="submitStatus === 'ERROR'">
          Please fill the form correctly.
        </p>

        <b-form-select v-model="computedAuthor" :options="selectAuthor">
        </b-form-select>
        <b-form-select v-model="computedGenre" :options="selectGenre">
        </b-form-select>
        <b-button
          variant="success"
          type="submit"
          value="create author"
          @click="createdBook"
          @keyup.enter="createdBook"
          aria-required="true"
          >Create Book</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { required, numeric } from "vuelidate/lib/validators";
export default {
  props: {
    selectedAuthor: { type: null, required: true },
    selectedGenre: { type: null, required: true },
    selectAuthor: { type: Array, required: true },
    selectGenre: { type: Array, required: true },
    booklist: { type: Array, required: true },
  },
  data() {
    return {
      book: {
        title: "",
        releaseYear: "",
      },
      submitStatus: null,
      test: "",
    };
  },
  computed: {
    computedAuthor: {
      get: function () {
        return this.selectedAuthor;
      },
      set: function (value) {
        this.$emit("updateSelectAuthor", value);
      },
    },
    computedGenre: {
      get: function () {
        return this.selectedGenre;
      },
      set: function (value) {
        this.$emit("updateSelectGenre", value);
      },
    },
  },
  methods: {
    createdBook: function () {
      this.$v.book.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        const author = this.selectAuthor.find(
          ({ value }) => value === this.computedAuthor
        );
        const genre = this.selectGenre.find(
          ({ value }) => value === this.computedGenre
        );

        const bookID =
          this.booklist.length - 1 < 0 ? 0 : this.booklist.length - 1 + 1;
        if (!author || !genre) return;

        this.$emit("createdBook", {
          title: this.book.title,
          author: author["text"],
          genre: genre["text"],
          releaseYear: this.book.releaseYear,
          bookID: bookID,
          authorID: this.computedAuthor,
          genreID: this.computedGenre,
        });

        this.submitStatus = "OK";
        this.book.title = "";
        this.book.releaseYear = "";
      }
    },
  },
  validations: {
    book: {
      title: {
        required,
      },
      releaseYear: { required, numeric },
    },
  },
};
</script>

<style>
p {
  font-size: 12px;
  margin-bottom: 3px;
}
</style>
