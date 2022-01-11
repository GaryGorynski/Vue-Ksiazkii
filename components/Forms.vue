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
          ></b-form-input>
          <b-form-input
            v-model="book.releaseyear"
            placeholder="Release year"
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
      selectAuthor: [{ value: "Author", text: "Autor", id: "1" }],
      selectGenre: [{ value: "Genre", text: "Genre", id: "1" }],
      author: {
        value: "",
        text: "",
        authorid: "",
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
  methods: {
    submitAuthor: function () {
      this.selectAuthor.push({
        value: this.author.value,
        text: this.author.text,
        authorid: this.author.authorid,
      });
    },
    submitGenre: function () {
      this.selectGenre.push({
        value: this.genre.value,
        text: this.genre.value,
      });
    },
    createBook: function () {
      this.booklist.push({
        booktitle: this.book.booktitle,
        releaseyear: this.book.releaseyear,
        author: this.selectAuthor[this.selectAuthor.length - 1].value,
        authorlname: this.selectAuthor[this.selectAuthor.length - 1].text,
        authorid: this.selectAuthor[this.selectAuthor.length - 1].authorid,
        genre: this.selectGenre[this.selectGenre.length - 1].value,
        genreid: Math.floor(Math.random() * 100000),
        bookid: Math.floor(Math.random() * 100000),
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
