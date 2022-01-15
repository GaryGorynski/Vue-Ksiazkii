<template>
  <div class="forms">
    <AuthorForm
      :selectAuthor="props.selectAuthor"
      v-on:submitedAuthor="submitAuthor($event)"
    />

    <GenreForm
      :selectGenre="props.selectGenre"
      v-on:submitedGenre="submitGenre($event)"
    />

    <CreateBookForm
      v-bind="props"
      v-on:updatedBooklist="updateBooklist($event)"
      v-on:createdBook="createBook($event)"
      v-on:updateSelectAuthor="updateSelectAuthor($event)"
      v-on:updateSelectGenre="updateSelectGenre($event)"
    />
    <div>
      <b-form-input
        id="filter-input"
        v-model="filter"
        type="search"
        placeholder="Type to Search"
      ></b-form-input>
      <b-table
        :filter="filter"
        :filter-included-fields="filterOn"
        :fields="fields"
        striped
        hover
        :items="props.booklist"
      >
        <template #cell(X)="{ item }">
          <b class="text-danger" @click="deleteRow(item)">X</b>
        </template>
      </b-table>
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
    CreateBookForm: createBookForm,
  },
  data() {
    return {
      props: {
        selectedAuthor: null,
        selectedGenre: null,
        selectAuthor: [{ value: "null", text: "Author" }],
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
      filter: null,
      filterOn: [],
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
      this.props.selectAuthor.push(event);
    },
    submitGenre: function (event) {
      this.props.selectGenre.push(event);
    },
    createBook: function (event) {
      // console.log(this.props.booklist);
      this.props.booklist.push({
        ...event,
      });
    },

    updateSelectAuthor: function (event) {
      this.props.selectedAuthor = event;
    },
    updateSelectGenre: function (event) {
      this.props.selectedGenre = event;
    },
    deleteRow: function (dupa) {
      const filtered = this.props.booklist.filter((test) => test !== dupa);
      this.props.booklist = filtered;
    },
  },
};
</script>

<style>
.forms {
  margin-left: 50px;
}
</style>
