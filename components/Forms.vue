<template>
  <div class="forms">
    <div id="author-form">
      <b-row class="my-5">
        <b-col sm="6">
          <b-form-input
            type="text"
            :value="author.authorfname"
            v-model="author.authorfname"
            placeholder="Author first name"
          ></b-form-input>
          <b-form-input
            v-model="author.authorlname"
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
          <b-form-select
            v-model="selectedAuthor"
            :options="selectAuthor"
          ></b-form-select>
          <b-form-select
            v-model="selectedGenre"
            :options="selectGenre"
          ></b-form-select>

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
      selectAuthor: [{ value: "Author", text: "Autor Testowy" }],
      selectGenre: [{ value: "Genre", text: "Genre testowe " }],
      author: {
        authorfname: "",
        authorlname: "",
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
      this.selectAuthor.push(this.author);
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
