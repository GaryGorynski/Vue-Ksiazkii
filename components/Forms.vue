<template>
  <div class="forms">
    <div id="author-form" @keyup="test">
      <b-row class="my-5">
        <b-col sm="6">
          <b-form-input
            v-model="text"
            placeholder="Author first name"
          ></b-form-input>
          <b-form-input
            v-model="text"
            placeholder="Author last name"
          ></b-form-input>
          <b-form-input v-model="text" placeholder="Author ID"></b-form-input>
          <b-button variant="primary" type="submit" value="create author"
            >Create Author</b-button
          >
        </b-col>
      </b-row>
    </div>
    <div id="genre-form">
      <b-row class="my-5">
        <b-col sm="6">
          <b-form-input v-model="text" placeholder="Genre"></b-form-input>
          <b-form-input v-model="text" placeholder="Genre ID"></b-form-input>

          <b-button variant="primary" type="submit" value="create genre"
            >Create Genre</b-button
          >
        </b-col>
      </b-row>
    </div>
    <div id="book-creator">
      <b-row class="my-5">
        <b-col sm="6">
          <b-form-input v-model="text" placeholder="Book title"></b-form-input>
          <b-form-input
            v-model="text"
            placeholder="Release year"
          ></b-form-input>
          <b-form-select
            v-model="select.selected"
            :options="select.optionOne"
            v-for="option in select.optionOne"
            :key="option"
          ></b-form-select>
          <b-form-select
            v-model="select.selected"
            :options="select.optionTwo"
            v-for="option in select.optionTwo"
            :key="option"
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
      select: {
        selected: null,
        optionOne: [{ value: null, text: "Author" }],
        optionTwo: [{ value: null, text: "Genre" }],
      },
      authors: [{ d }, {}, {}],
      genres: [],
      booklist: [],
      AuthorObject: {},
      GenreObject: {},
      BookObject: {},
    };
  },
  methods: {
    test: function (event) {
      console.log(event.key);
    },
  },
};
</script>

<style>
.forms {
  margin-left: 50px;
}
</style>
