<template>
  <div class="forms">
    <div id="author-form">
      <b-row class="my-5">
        <b-col sm="6">
          <b-form-input
            type="text"
            v-model="author.value"
            placeholder="Author first name"
          ></b-form-input>
          <b-form-input
            v-model="author.text"
            placeholder="Author last name"
          ></b-form-input>
          <b-form-input
            v-model="author.authorid"
            placeholder="Author ID"
          ></b-form-input>
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
          <b-form-input
            v-model="genre.genreid"
            placeholder="Genre ID"
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
            placeholder="Book title"
            v-model="book.booktitle"
          ></b-form-input>
          <b-form-input
            placeholder="Release year"
            v-model="book.releaseyear"
          ></b-form-input>
          <b-form-select v-model="selectedAuthor" :options="authorOptions">
          </b-form-select>
          <b-form-select :options="genreOptions"> </b-form-select>
          <b-button
            variant="success"
            type="submit"
            value="create author"
            v-model="book.bookid"
            @click="createBook"
            >Create Book</b-button
          >
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedAuthor: "Author",
      selectedGenre: "Genre",
      authorOptions: [{ value: "Author", text: "Autor", authorid: "1" }],
      genreOptions: [{ value: "Genre", text: "Genre", genreid: "1" }],
      author: {
        value: "",
        text: "",
        authorid: "",
      },
      genre: {
        value: "",
        genreid: "",
      },
      book: {
        booktitle: "",
        releaseyear: "",
        bookid: Math.floor(Math.random() * 100000),
      },
      booklist: [],
    };
  },
  methods: {
    submitAuthor: function () {
      this.authorOptions.push({
        value: this.author.value,
        text: this.author.text,
        authorid: this.author.authorid,
      });
    },
    submitGenre: function () {
      this.genreOptions.push({
        value: this.genre.value,
        text: this.genre.value,
        genreid: this.genre.genreid,
      });
    },
    createBook: function () {
      this.booklist.push({
        booktitle: this.book.booktitle,
        authorfname: this.author.value,
        authorlname: this.author.text,
        bookid: Math.floor(Math.random() * 100000),
        releaseyear: this.book.releaseyear,
        authorid: this.author.authorid,
        genre: this.genre.value,
        genreid: this.genre.genreid,
      });
      console.log(this.booklist);
    },
  },
};
</script>

<style>
.forms {
  margin-left: 100px;
}
</style>
