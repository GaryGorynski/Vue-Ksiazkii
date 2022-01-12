<template>
  <div class="forms">
    <div id="author-form">
      <b-row class="my-5">
        <b-col sm="6">
          <b-form-input
            type="text"
            v-model="author.value"
            placeholder="Author first name"
          >
            <div class="error" v-if="!$v.author.value.required">Test</div>
          </b-form-input>
          <b-form-input
            v-model="author.text"
            type="text"
            placeholder="Author last name"
          ></b-form-input>
          <!--  <b-form-input
            v-model="author.authorid"
            placeholder="Author ID"
          ></b-form-input> !-->
          <b-button
            variant="primary"
            type="submit"
            value="create author"
            @click="submitAuthor"
            >Create Author</b-button
          >
        </b-col>
      </b-row>
    </div>
    <div id="genre-form">
      <b-row class="my-5">
        <b-col sm="6">
          <b-form-input
            v-model="genre.value"
            placeholder="Genre"
          ></b-form-input>
          <!-- <b-form-input
            v-model="genre.genreid"
            placeholder="Genre ID"
          ></b-form-input> !-->

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
          ></b-form-input>
          <b-form-input
            v-model="book.releaseyear"
            placeholder="Release year"
            type="text"
          ></b-form-input>
          <b-form-select
            v-model="selectedAuthor"
            :options="selectAuthor"
            @click="check"
          >
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
import { required } from "vuelidate/lib/validators";
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
    },
  },
  methods: {
    submitAuthor: function () {
      this.selectAuthor.push({
        value: Math.floor(Math.random() * 100000),
        text: this.author.value + " " + this.author.text,
      });
      this.$v.$touch();
      if (!this.$v.invalid) {
        console.log(`Name: ${this.author.value}`);
      }
    },
    submitGenre: function () {
      this.selectGenre.push({
        value: Math.floor(Math.random() * 100000),
        text: this.genre.value,
      });
    },
    createBook: function () {
      this.booklist.push({
        booktitle: this.book.booktitle,
        releaseyear: this.book.releaseyear,
        bookid: Math.floor(Math.random() * 100000),
        authorid: this.selectedAuthor,
        genreid: this.selectedGenre,
      });
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
