<template>
  <div class="forms">
    <AuthorForm
      v-bind="authorprops"
      v-on:submitedAuthor="submitAuthor($event)"
    />

    <GenreForm v-bind="authorprops" v-on:submitedGenre="submitGenre($event)" />

    <CreateBookForm
      v-bind="authorprops"
      v-on:createdBook="createBook($event)"
      v-on:updateSelectAuthor="updateSelectAuthor($event)"
      v-on:updateSelectGenre="updateSelectGenre($event)"
    />
    <div>
      <b-table :fields="fields" striped hover :items="items">
        <template #cell(X)="{ item }">
          <b class="text-danger" @click="deleteRow(item)">X</b>
        </template>
      </b-table>
    </div>
    <div></div>
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
      authorprops: {
        selectedAuthor: null,
        selectedGenre: null,
        selectAuthor: [{ value: null, text: "Author" }],
        selectGenre: [{ value: null, text: "Genre" }],
        booklist: [],
      },
      fields: [
        "title",
        "author",
        "bookID",
        "releaseYear",
        "authorID",
        "genre",
        "genreID",
        "X",
      ],
      items: [],
    };
  },
  validations: {
    book: {
      title: { required },
      releaseYear: { required, numeric },
    },
  },

  methods: {
    submitAuthor: function (event) {
      this.authorprops.selectAuthor.push(event);
      console.log(this.authorprops.selectAuthor);
    },
    submitGenre: function (event) {
      this.authorprops.selectGenre.push(event);
    },
    createBook: function (event) {
      this.authorprops.booklist.push(event);
      // console.log(this.authorprops.booklist);
      this.items.push({
        ...event,
        author: "dupa",
        genre: "dupa",
      });
      console.log(this.items);
    },
    deleteRow: function (dupa) {
      const filtered = this.items.filter((test) => test !== dupa);
      this.items = filtered;
    },
    updateSelectAuthor: function (event) {
      this.authorprops.selectedAuthor = event;
    },
    updateSelectGenre: function (event) {
      this.authorprops.selectedGenre = event;
    },
  },
};
</script>

<style>
.forms {
  margin-left: 50px;
}
</style>
