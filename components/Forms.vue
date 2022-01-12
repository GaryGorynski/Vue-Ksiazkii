<template>
  <div class="forms">
    <div id="author-form">
      <b-row class="my-5">
        <b-col sm="6">
          <b-form-input
            type="text"
            placeholder="Author first name"
            v-model="$v.author.value.$model"
            :class="{
              'is-invalid': $v.author.value.$error,
              'is-valid': !$v.author.value.$invalid,
            }"
          >
          </b-form-input>

          <b-form-input
            type="text"
            placeholder="Author last name"
            v-model="$v.author.text.$model"
            :class="{
              'is-invalid': $v.author.text.$error,
              'is-valid': !$v.author.text.$invalid,
            }"
          ></b-form-input>

          <!--  <b-form-input
            v-model="author.authorid"
            placeholder="Author ID"
          ></b-form-input> !-->
          <b-button
            variant="primary"
            type="submit"
            value="create author"
            @click.prevent="submitAuthor"
            >Create Author</b-button
          >
        </b-col>
      </b-row>
    </div>
    <div id="genre-form">
      <b-row class="my-5">
        <b-col sm="6">
          <b-form-input
            :class="{
              'is-invalid': $v.genre.value.$error,
              'is-valid': !$v.genre.value.$invalid,
            }"
            v-model="genre.value"
            placeholder="Genre"
          ></b-form-input>

          <b-button
            variant="primary"
            type="submit"
            value="create genre"
            @click="submitGenre"
            >Create Genre</b-button
          >
        </b-col>
      </b-row>
    </div>
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
          <b-form-input
            :class="{
              'is-invalid': $v.book.releaseyear.$error,
              'is-valid': !$v.book.releaseyear.$invalid,
            }"
            v-model="book.releaseyear"
            placeholder="Release year"
            type="number"
          ></b-form-input>

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

export default {
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
      genre: {
        value: "",
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
    submitAuthor: function () {
      if (this.author.value === "" || this.author.text === "") {
        this.$v.$touch();
      } else {
        this.selectAuthor.push({
          value: Math.floor(Math.random() * 100000),
          text: this.author.value + " " + this.author.text,
        });
        this.author = "";
      }
    },
    submitGenre: function () {
      if (this.genre.value === "") {
        this.$v.$touch();
      } else {
        this.selectGenre.push({
          value: Math.floor(Math.random() * 100000),
          text: this.genre.value,
        });
        this.genre.value = "";
      }
    },
    createBook: function () {
      if (
        this.author.value === "" ||
        this.author.text === "" ||
        this.genre.value === "" ||
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
      this.book = "";
      (this.selectedAuthor = null), (this.selectedGenre = null);
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
