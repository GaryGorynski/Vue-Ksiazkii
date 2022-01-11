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
            v-model="genre.genrename"
            placeholder="Genre"
          ></b-form-input>
          <b-form-input
            v-model="genre.id"
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
          <b-form-input placeholder="Book title"></b-form-input>
          <b-form-input placeholder="Release year"></b-form-input>
          <b-form-select></b-form-select>

          <b-button variant="success" type="submit" value="create author"
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
      selectAuthor: [{ value: "Author", text: "Autor Testowy", id: "1" }],
      selectGenre: [{ value: "Genre", text: "Genre testowe " }],
      author: {
        value: "",
        text: "",
        authorid: "",
      },
      genre: {
        genrename: "",
        genreid: "",
      },
      authors: [],
      genres: [],
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
      this.genres.push(this.genre);
      console.log(this.genres);
    },
  },
};
</script>

<style>
.forms {
  margin-left: 50px;
}
</style>
